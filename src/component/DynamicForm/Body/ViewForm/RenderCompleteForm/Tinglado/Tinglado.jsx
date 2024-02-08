import { Typography , Box } from "@mui/material";
import RenderObjectProperties from "../RenderObjectPropierties";
export default function Tinglado ({form}){
    return<Box>
        <Typography variant='h6'>Sección Tinglado</Typography>
        <RenderObjectProperties objeto={form}/>
    </Box>
}