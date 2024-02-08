import { useRouteError } from "react-router-dom";
import styles from './Error404.module.css'
import { Box, Typography } from "@mui/material";
export default function Error404() {
  const error = useRouteError();
  console.error(error);

  return (
   <div className={styles.container}>
    <Box className={styles.box}>
    <Typography>
        Oops!
    </Typography>
    <Typography>
        Lo siento, ha ocurrido un error inesperado
    </Typography>
    <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Box>
   </div>
  );
}