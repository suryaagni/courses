
import './BreadCrumb.css';
const BreadCrumb = (({title})=>{
    return(
        <div className="BreadCrumb">
            <div className="container">
                <div className="breadcrumbText">
                    <h4 className="activePage">{title}</h4>
                </div>
            </div>
        </div>
    )
});

export default BreadCrumb;