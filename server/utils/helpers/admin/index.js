const { User } = require("../../../models/user");
const { ROLES } = require("../../middleware/multiUserProtected");

// Role hierarchy: superadmin > admin > manager > default
// When a user is updating or creating a user in multi-user, we need to check if they
// are allowed to do this and that the new or existing user will be at or below their permission level.
function validRoleSelection(currentUser = {}, newUserParams = {}) {
  if (!newUserParams.hasOwnProperty("role"))
    return { valid: true, error: null }; // not updating role, so skip.
  if (currentUser.role === ROLES.superadmin) return { valid: true, error: null };
  if (currentUser.role === ROLES.admin) {
    // admin cannot assign superadmin
    const validRoles = [ROLES.admin, ROLES.manager, ROLES.default];
    if (!validRoles.includes(newUserParams.role))
      return { valid: false, error: "Invalid role selection for user." };
    return { valid: true, error: null };
  }
  if (currentUser.role === ROLES.manager) {
    const validRoles = [ROLES.manager, ROLES.default];
    if (!validRoles.includes(newUserParams.role))
      return { valid: false, error: "Invalid role selection for user." };
    return { valid: true, error: null };
  }
  return { valid: false, error: "Invalid condition for caller." };
}

// Ensure at least one superadmin (or admin) remains after a role change.
async function canModifyAdmin(userToModify, updates) {
  if (!updates.hasOwnProperty("role")) return { valid: true, error: null };
  if (updates.role === userToModify.role) return { valid: true, error: null };

  // Downgrading a superadmin — ensure at least one remains
  if (userToModify.role === ROLES.superadmin) {
    const count = await User.count({ role: ROLES.superadmin });
    if (count - 1 <= 0)
      return {
        valid: false,
        error: "No super-admins will remain if you do this. Update failed.",
      };
    return { valid: true, error: null };
  }

  // Downgrading an admin — ensure at least one admin or superadmin remains
  if (userToModify.role === ROLES.admin) {
    const adminCount = await User.count({ role: ROLES.admin });
    const superadminCount = await User.count({ role: ROLES.superadmin });
    if (adminCount - 1 <= 0 && superadminCount <= 0)
      return {
        valid: false,
        error: "No system admins will remain if you do this. Update failed.",
      };
    return { valid: true, error: null };
  }

  return { valid: true, error: null };
}

function validCanModify(currentUser, existingUser) {
  if (currentUser.role === ROLES.superadmin) return { valid: true, error: null };
  if (currentUser.role === ROLES.admin) {
    // admin cannot modify superadmins
    if (existingUser.role === ROLES.superadmin)
      return { valid: false, error: "Cannot perform that action on user." };
    return { valid: true, error: null };
  }
  if (currentUser.role === ROLES.manager) {
    const validRoles = [ROLES.manager, ROLES.default];
    if (!validRoles.includes(existingUser.role))
      return { valid: false, error: "Cannot perform that action on user." };
    return { valid: true, error: null };
  }

  return { valid: false, error: "Invalid condition for caller." };
}

module.exports = {
  validCanModify,
  validRoleSelection,
  canModifyAdmin,
};
