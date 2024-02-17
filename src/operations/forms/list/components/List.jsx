import { createContext, useEffect, useState } from "react";
import { Spinner, Typography } from "@material-tailwind/react";

import { ListView } from "./ListView";
import { GridView } from "./GridView";

import { formsProvider } from "../../../../providers";

import { useNotify } from "../../../../hooks";
import { dumbLoading } from "../../../utils";
import { FormCreateModal } from "../../create/FormCreateModal";

import emptyList from "../../../../assets/images/empy_list.png";
import Proptypes from "prop-types";

/*eslint-disable*/

export const LIST_CONTEXT = createContext();

function EmptyList() {
  return (
    <div className="w-ful h-[350px] min-h-[450px] flex items-center gap-5 justify-center flex-col">
      <img src={emptyList} className="w-[300px]" />
      <Typography className="text-[35px] text-bgray">
        {"You don't have a form yet"}
      </Typography>
      <FormCreateModal />
    </div>
  );
}

export function List({ isGridView, sortType }) {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const notify = useNotify();

  const fetchForms = async () => {
    formsProvider
      .getForms(sortType)
      .then((data) => setForms(data))
      .catch(() => {
        notify("Oops, cannot get your forms");
      })
      .finally(() => dumbLoading(() => setIsLoading(false)));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchForms();
  }, [sortType]);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <Spinner />
    </div>
  ) : forms.length === 0 ? (
    <EmptyList />
  ) : (
    <LIST_CONTEXT.Provider value={{ fetchForms, setIsLoading }}>
      {!isGridView ? <ListView forms={forms} /> : <GridView forms={forms} />}
    </LIST_CONTEXT.Provider>
  );
}

List.propTypes = {
  isGridView: Proptypes.bool,
  sortType: Proptypes.string,
};
