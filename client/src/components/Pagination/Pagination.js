import Pagination from "@mui/material/Pagination";
import "./styles.css";
function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => {
          handlePageChange(event, value);
        }}
        sx={{
          color: "white",
          "& .Mui-selected ": {
            backgroundColor: "#3a80e9 !important",
            color: "#fff !important",
            borderColor: "#3a80e9 !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid #888 !important",
          },
          "& .MuiPaginationItem-text": {
            color: "white",
            border: "1px solid #888",
          },
        }}
      />
    </div>
  );
}

export default PaginationComponent;
