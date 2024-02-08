import { Box , Typography} from "@mui/material"
import RenderObjectProperties from "../RenderObjectPropierties"
export default function Teatro({form}){
    return<Box>
        <Typography variant='h6'>Sección Teatro</Typography>
        <RenderObjectProperties objeto={form}/>
        </Box>
}
