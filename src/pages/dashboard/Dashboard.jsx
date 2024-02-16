import { Route, Routes } from "react-router-dom";

import { FormList, FormEdit } from "../../operations/forms";
import { ProfileShow } from "../../operations/profile";
import { NotFoundPage } from "../NotFoundPage";
import { Layout } from "../../ui";
import { useDashboardState } from "../../stores";
import { Spinner } from "@material-tailwind/react";

export function Dashboard() {
  const isLoading = useDashboardState(state => state.isLoading);

  return (
    <Layout>
      {
        isLoading &&
        <div
          style={{ height: "calc(100vh - 50px)" }}
          className="w-full  flex-col flex items-center justify-center"
        >
          <Spinner />
        </div>
      }
      <Routes>
        <Route path="forms/:formId/edit" element={<FormEdit />} />
        <Route path="/profile" element={<ProfileShow />} />
        <Route path="/" element={<FormList />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
