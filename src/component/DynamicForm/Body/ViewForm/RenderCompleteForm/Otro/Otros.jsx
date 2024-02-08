import { Box, Typography } from "@mui/material";
import RenderObjectProperties from "../RenderObjectPropierties";
export default function Otros ({form}){
    return<Box>
        <Typography variant='h6'>Sección Otro</Typography>
        <RenderObjectProperties objeto={form}/>
    </Box>
}