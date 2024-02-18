import { Route, Routes } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

import { FormList, FormEdit, FormReply } from "../../operations/forms";
import { ProfileShow } from "../../operations/profile";

import { NotFoundPage } from "../NotFoundPage";

import { Layout } from "../../ui";
import { useDashboardState } from "../../stores";

export function Dashboard() {
  const isLoading = useDashboardState((state) => state.isLoading);

  return (
    <Layout>
      {isLoading && (
        <div
          style={{ height: "calc(100vh - 50px)" }}
          className="w-full  flex-col flex items-center justify-center"
        >
          <Spinner />
        </div>
      )}
      <Routes>
        <Route path="forms/:formId/edit" element={<FormEdit />} />
        <Route path="forms/:formId/reply" element={<FormReply />} />
        <Route path="/profile" element={<ProfileShow />} />
        <Route path="/" element={<FormList />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
