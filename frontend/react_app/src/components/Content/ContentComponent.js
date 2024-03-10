import './Content.css';
import MountTypeForm from '../../forms/MountType/MountTypeForm';
import MountDetailsForm from '../../forms/MountDetails/MountDetailsForm';
import MountPipeDetailsForm from '../../forms/MountPipeDetails/MountPipeDetailsForm';
import FacePlanDetailsForm from '../../forms/FacePlanDetails/FacePlanDetailsForm';
import KickerForm from '../../forms/Kicker/KickerForm';
import SupportsForm from '../../forms/Supports/SupportsForm';
import TieBackForm from '../../forms/TieBack/TieBackForm';


const ContentComponent = () => {

    return (
        <div className="Content">
            {/* <MountTypeForm /> */}
            <MountDetailsForm />
            {/* <MountPipeDetailsForm /> */}
            {/* <FacePlanDetailsForm /> */}
            {/* <KickerForm /> */}
            {/* <SupportsForm /> */}
            {/* <TieBackForm /> */}
        </div>

    );
}

export default ContentComponent;