import { Typography , Box } from "@mui/material";
import RenderObjectProperties from "../RenderObjectPropierties";
export default function CampoDeporte ({form}){
    return<Box>
        <Typography variant='h6'>Sección Campo de Deporte</Typography>
        <RenderObjectProperties objeto={form}/>
    </Box>
}