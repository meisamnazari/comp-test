import React, { FC } from "react";
import { BackdropLoadingProps } from "./types";
import { Backdrop, CircularProgress } from "@material-ui/core";

const CustomBackdropLoading: FC<BackdropLoadingProps> = ({
  onClose,
  open = true,
}) => {
  return (
    <div>
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default CustomBackdropLoading;
