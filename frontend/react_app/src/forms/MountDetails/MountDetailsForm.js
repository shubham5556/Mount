import './MountDetailsForm.css';
import { useState } from 'react';
import MountDetailsFormData from '../../data/MountDetailsFormData.json';

const MountDetailsForm = () => {

    const [formData, setFormData] = useState({
        MountType: 'Platform',
        SubType: '3-Sided',
        BoomType: 'V-Boom',
        NumOfHandrails: '',
        HandrailSpacing: '',
        Diameter: '',
        FaceWidth: '',
        Height: '',
        Standoff: '',
        Kicker: '',
        FaceRotation: '',
        MountAzimuth: '',
        MountAzimuthFaceA: '',
        MountAzimuthFaceB: '',
        MountAzimuthFaceC: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    let renderFormFields = MountDetailsFormData
        .filter((fields) => fields.displayCondition.includes(formData["MountType"], formData["SubType"], formData["BoomType"]))
        .map(fields => {
            if (fields.type === 'dropdown') {
                return (
                    <div className="mb-4" key={fields.name}>
                        <label className="form-label">
                            {fields.label}
                        </label>
                        <select
                            className="form-select"
                            name={fields.name}
                            id={fields.controlId}
                            value={formData.name}
                            onChange={handleChange}
                        >
                            {fields.options.map((opt, idx) => {
                                return (
                                    <option key={idx} value={opt}>
                                        {opt}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                )
            }
            if (fields.type === 'number') {
                return (
                    <div className="mb-4" key={fields.name}>
                        <label className="form-label">
                            {fields.label}
                        </label>
                        <input
                            type={fields.type}
                            className="form-control"
                            id={fields.controlId}
                            name={fields.name}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={fields.placeholder}
                            required
                        />
                    </div>
                );
            }
            return null;
        });

    if (formData["SubType"] === "Circular") {
        renderFormFields = renderFormFields.filter(item => item.key !== "FaceWidth")
    } else {
        renderFormFields = renderFormFields.filter(item => item.key !== "Diameter")
    }

    return (
        <div className='container'>
            <div className="row g-3">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <h1>Mount Catlog</h1>
                            <div id="formHeading" className="form-text">
                                * Enter the below details.
                            </div>
                        </div>
                        {renderFormFields}
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div >
        </div >
    );
};

export default MountDetailsForm;
