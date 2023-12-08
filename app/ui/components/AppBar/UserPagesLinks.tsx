"use client";
import { MdDashboardCustomize } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip } from "@mui/material";
export default function UserPagesLinks() {
  const pathname = usePathname();
  return (
    <>
      <Tooltip title="Dashboard">
        <Link href="/user/dashboard" className="mr-6">
          <MdDashboardCustomize
            className={`text-lg hover:fill-primary ${
              pathname === "/user/dashboard" && "fill-primary"
            }`}
          />
        </Link>
      </Tooltip>
      <Tooltip title="Vocuaplary">
        <Link href="/user/vocup">
          <TbVocabulary
            className={`text-lg hover:fill-primary ${
              pathname === "/user/vocup" && "fill-primary"
            }`}
          />
        </Link>
      </Tooltip>
    </>
  );
}
