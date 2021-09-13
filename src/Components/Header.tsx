import React, { useRef } from 'react';
import { Formik } from 'formik';
import QueryParams from '../interface/queryParams';

interface HeaderProps {
  applyFilter: (queryParams: any) => void,
  clearFilter: () => void,
  queryParams: QueryParams
}

const Header: React.FC<HeaderProps> = ({ applyFilter, clearFilter, queryParams }) => {
  let formikRef: any = useRef();

  const resetForm = () => {
    formikRef.current?.resetForm();
    clearFilter()
  }
  return (
    <>
      <h2>Simple Interface</h2>
      <div className="card shadow mt-5">
        <div className="card-header fw-bolder">Filters</div>
        <div className="card-body">
          <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={{
              title: queryParams?.title ? queryParams.title : '',
              status: queryParams?.status ? queryParams.status : '',
              dueDateFrom: queryParams?.dueDateFrom ? queryParams.dueDateFrom : '',
              dueDateTo: queryParams?.dueDateTo ? queryParams.dueDateTo : ''
            }}
            onSubmit={applyFilter}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="name" className="fw-bold">Name:</label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={values.title}
                      onChange={handleChange} />
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="status" className="fw-bold">Status:</label>
                    <select className="form-select" aria-label="Default select example" name="status" value={values.status}
                      onChange={(event) => {
                        setFieldValue('status', event.target.value);
                      }} >
                      <option value="" disabled>Select Status</option>
                      <option value="internal qa">Internal QA</option>
                      <option value="client review">Client Review</option>
                      <option value="in progress">In Progress</option>
                      <option value="to do">To Do</option>
                      <option value="done">Done</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="uname" className="fw-bold">Due date (From):</label>
                    <input type="date" className="form-control" name="dueDateFrom" value={values.dueDateFrom.toString()} onChange={handleChange} />
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <label htmlFor="uname" className="fw-bold">Due date (To):</label>
                    <input type="date" className="form-control" name="dueDateTo" value={values.dueDateTo.toString()} onChange={handleChange} />
                  </div>
                </div>
                <hr />
                <div className="text-center mt-4">
                  <button type="button" className="btn btn-light border" onClick={() => resetForm()} >Clear</button>
                  <button type="submit" className="btn btn-primary ms-2">Apply</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Header;
