import React from "react";
import { BackdropLoadingProps } from "./types";
import { Backdrop } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";

const CustomBackdropLoading: any = () => {
  return (
    <div>
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default CustomBackdropLoading;
