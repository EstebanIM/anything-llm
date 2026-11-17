import { useTranslation } from "react-i18next";
import { formatDateTime } from "@/utils/dates";

export default function WorkspaceMemberRow({ user }) {
  const { t } = useTranslation();
  return (
    <tr className="bg-transparent text-theme-text-primary text-sm font-medium border-b border-white/10 light:border-slate-200 last:border-b-0">
      <th scope="row" className="px-4 md:px-6 py-4 text-left whitespace-nowrap">
        {user.username}
      </th>
      <td className="px-4 md:px-6 py-4">
        {t(`profile_settings.roles.${user.role}`, { defaultValue: user.role })}
      </td>
      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
        {formatDateTime(user.lastUpdatedAt)}
      </td>
    </tr>
  );
}
