import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";

type Props = {
  /**
   * Handler for closing the prompt (and the file)
   */
  onClose: VoidFunction;

  /**
   * Handler for submitting a password
   *
   * @param password
   * @returns
   */
  onSubmit: (password: string) => void;

  /**
   * Whether the password has already been incorrectly provided
   */
  incorrect?: boolean;
};

export default function PdfViewerPasswordPrompt({
  onClose,
  onSubmit,
  incorrect,
}: Props) {
  const [password, setPassword] = useState("");

  return (
    <Dialog fullWidth open>
      <DialogTitle>Enter Password</DialogTitle>
      <DialogContent>
        <Typography>
          This file is password protected, enter the password to view it.
        </Typography>

        <TextField
          autoComplete="off"
          fullWidth
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={incorrect}
          helperText={incorrect ? "Incorrect password" : undefined}
        />
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          onClick={() => {
            onSubmit(password);
          }}
        >
          Unlock
        </Button>
      </DialogActions>
    </Dialog>
  );
}
