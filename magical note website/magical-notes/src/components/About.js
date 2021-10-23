import React from 'react'

export default function About(props) {
    return (
        <div className={`mb-3 bg-${props.mode}`}>
            <div classname="mb-3">
                <label for="formFile" classname="form-label">Default file input example</label>
                <input classname="form-control" type="file" id="formFile" />
            </div>
            <div classname="mb-3">
                <label for="formFileMultiple" classname="form-label">Multiple files input example</label>
                <input classname="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div classname="mb-3">
                <label for="formFileDisabled" classname="form-label">Disabled file input example</label>
                <input classname="form-control" type="file" id="formFileDisabled" disabled />
            </div>
            <div classname="mb-3">
                <label for="formFileSm" classname="form-label">Small file input example</label>
                <input classname="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
            <div>
                <label for="formFileLg" classname="form-label">Large file input example</label>
                <input classname="form-control form-control-lg" id="formFileLg" type="file" />
            </div>
        </div>
    )
}
