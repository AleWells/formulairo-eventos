import { Box } from "@mui/material";
import Body from "./Body/Body";
import styles from "./DynamicForm.module.css";


export default function DynamicForm() {
  return (
   <Box className={styles.containerForm} >
    <Body />
   </Box>
  );
}
