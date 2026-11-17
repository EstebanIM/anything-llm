import PostgreSQLLogo from "./icons/postgresql.png";
import MySQLLogo from "./icons/mysql.png";
import MSSQLLogo from "./icons/mssql.png";

export const DB_LOGOS = {
  postgresql: PostgreSQLLogo,
  mysql: MySQLLogo,
  "sql-server": MSSQLLogo,
};

export const ENGINE_LABELS = {
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  "sql-server": "SQL Server",
};

export const DEFAULT_PORTS = {
  postgresql: "5432",
  mysql: "3306",
  "sql-server": "1433",
};

export const ENGINES = Object.keys(ENGINE_LABELS);
