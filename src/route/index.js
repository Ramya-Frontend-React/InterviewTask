import React from "react";
import { Routes, Route } from "react-router-dom";
import Colunm_create from "../admin/colunm_create";
import Table_entry from "../admin/table_entry";
import Table_view from "../admin/tableview";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Colunm_create />} />
        <Route path="/tableentry" element={<Table_entry />} />
        <Route path="/tableview" element={<Table_view />} />
      </Routes>
    </div>
  );
}

export default Router;
