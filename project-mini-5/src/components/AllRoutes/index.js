import { useRoutes } from "react-router-dom"
import { router } from "../../routes/index"
function AllRoute() {
    const element = useRoutes(router)
    return (
        <>
            {element}
        </>
    )
}
export default AllRoute
