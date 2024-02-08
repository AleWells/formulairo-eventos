import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import RenderCompleteForm from "../RenderCompleteForm/RenderCompleteForm";
export default function RenderFormView (){
const {id} = useParams();
const {forms} = useSelector(state=>state.data)
const form = forms.find(e=>e.id==id)
    return<RenderCompleteForm form={form}/>
}