async function ensureSuperAdmin() {
  try {
    const { SystemSettings } = require("../../models/systemSettings");
    const { User } = require("../../models/user");

    if (!(await SystemSettings.isMultiUserMode())) return;
    if ((await User.count({ role: "superadmin" })) > 0) return;

    const admins = await User._where({ role: "admin" });
    if (admins.length === 0) return;

    for (const a of admins) {
      await User._update(a.id, { role: "superadmin" });
    }
    console.log(
      `\x1b[32m[boot]\x1b[0m Promoted ${admins.length} admin(s) to superadmin.`
    );
  } catch (e) {
    console.error("[boot] ensureSuperAdmin failed:", e.message);
  }
}

module.exports = { ensureSuperAdmin };
