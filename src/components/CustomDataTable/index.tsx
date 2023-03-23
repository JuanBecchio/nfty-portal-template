import DataTable, { TableColumn } from "react-data-table-component";
import { Card, Spinner } from "reactstrap";
import { PaginationComponent } from "react-data-table-component/dist/src/DataTable/types";

import "../../@core/scss/react/libs/react-select/_react-select.scss";
import "../../@core/scss/react/libs/tables/react-dataTable-component.scss";
import { Primitive } from "../../types/types";

export type DataTableType<T> = {
  columns: TableColumn<T>[];
  data: T[];
};

export interface CustomDataTableColumns<T = Record<string, Primitive>>
  extends TableColumn<T> {
  id: string;
  cellValuePayload?: (row: T) => string | number;
  cellClassName?: string;
  cell?: (row: T) => JSX.Element;
}

export const createDataTable = <T = Record<string, Primitive>,>(
  data: T[],
  columns: CustomDataTableColumns<T>[]
): DataTableType<T> => {
  return {
    data,
    columns: columns.map((column, index) => ({
      name: column.id,
      grow: index ? 1 : 2,
      sortable: true,
      selector: (row) =>
        column.cellValuePayload?.(row) ||
        String(
          column.id
            .split(".")
            .reduce(
              (prev, curr) => (prev as Record<string, Primitive>)?.[curr],
              row as unknown
            ) || "-"
        ),
      cell: (row: T) => {
        const value =
          column.cellValuePayload?.(row) ||
          String(
            column.id
              .split(".")
              .reduce(
                (prev, curr) => (prev as Record<string, Primitive>)?.[curr],
                row as unknown
              ) || "-"
          );
        return (
          <span
            className={`fs-${index ? 7 : 6} fw-${
              index ? "bold" : "bolder"
            } main-text m-0 ${column.cellClassName}`}
            title={String(value)}
          >
            {value}
          </span>
        );
      },
      ...column,
    })),
  };
};

type CustomDataTableProps<T> = {
  dataTable: DataTableType<T> | undefined;
  loading?: boolean;
  paginationComponent?: PaginationComponent;
  subHeaderComponent?: React.ReactElement;
};

const CustomDataTable = <T,>({
  dataTable = { columns: [], data: [] },
  loading,
  paginationComponent,
  subHeaderComponent,
}: CustomDataTableProps<T>) => {
  return (
    <Card className="overflow-hidden">
      <div className="react-dataTable">
        <DataTable
          progressPending={loading}
          progressComponent={
            <Spinner
              style={{ width: 32, height: 32, marginBottom: 30 }}
              color="secondary"
            />
          }
          noHeader
          subHeader={Boolean(subHeaderComponent)}
          responsive={Boolean(subHeaderComponent)}
          pagination
          paginationServer
          columns={dataTable.columns}
          className="react-dataTable"
          data={dataTable.data}
          paginationComponent={paginationComponent}
          subHeaderComponent={subHeaderComponent}
        />
      </div>
    </Card>
  );
};

export default CustomDataTable;
