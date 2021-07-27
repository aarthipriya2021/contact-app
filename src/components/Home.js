import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        {/* <div className="col-md-12 my-5 text-right"> */}
          <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
            Add Contact
          </Link>
        {/* </div> */}
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header text-center bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-small btn-primary mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-small btn-danger "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )) 
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
