import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formsProvider } from "../../../providers";
import { SelectSortType, SortType } from "../list/FormList";
import { FormCreateModal } from "../create/FormCreateModal";
import { useDashboardState } from "../../../stores";
import { dumbLoading } from "../../utils";
import { EmptyList } from "../list/components/List";
import { AnswerItem } from "./AnswerItem";

/*eslint-disable*/
export function FormAnswersList() {
  const { formId } = useParams();
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();
  const [sortType, setSortType] = useState(SortType.createdAt);
  const { setIsLoading, isLoading } = useDashboardState();

  useEffect(() => {
    setIsLoading(true);
    const getAnswers = async () => {
      formsProvider
        .getFormAnswers(formId, sortType)
        .then((answers) => setResponses(answers))
        .catch(() => navigate("/dashboard/error/private"))
        .finally(() => dumbLoading(() => setIsLoading(false)));
    };

    getAnswers();
  }, [formId, sortType]);

  if (isLoading) return null;

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <FormCreateModal />
        <SelectSortType value={sortType} setSortType={setSortType} />
      </div>
      {responses.length <= 0 ? (
        <EmptyList label={"This form does not have a response yet"} />
      ) : (
        responses.map((response) => (
          <AnswerItem key={response.id} response={response} />
        ))
      )}
    </div>
  );
}
