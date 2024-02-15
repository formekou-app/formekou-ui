import { Route, Routes } from "react-router-dom";

import { FormList, FormCreate } from "../../operations/forms";
import { ProfileShow } from "../../operations/profile";
import { NotFoundPage } from "../NotFoundPage";
import { Layout } from "../../ui";

export function Dashboard() {
  return (
    <Layout>
      <Routes>
        <Route path="forms/create" element={<FormCreate />} />
        <Route path="/profile" element={<ProfileShow />} />
        <Route path="/" element={<FormList />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
