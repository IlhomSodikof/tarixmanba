import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ title, link, subtitle }) {
  const { t } = useTranslation();
  return (
    <div className="menu_container">
      <p>
        <Link to="/">{t("boshpage_")}</Link>
      </p>
      <span>/</span>{" "}
      <p>
        <Link to={link}>{t(title)}</Link>
      </p>
      <span>/</span>{" "}
      <p className="page_name">
        <Link to="">{t(subtitle)}</Link>
      </p>
    </div>
  );
}
