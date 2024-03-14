import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: '',
      type: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const linkData = {
      links: this.state.links,
      type: this.state.type
    };
    this.props.handleLinkSubmission(linkData);
    this.setState({
      links: '',
      type: ''
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={this.props.toggleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button">
          Add Link
        </button>
        {this.props.isModalOpen && (
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Add Your Links
                  </h3>
                  <button
                    onClick={this.props.toggleModal}
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl w-8 h-8 ms-auto inline-flex justify-center items-center">
                   <IoCloseCircleOutline/>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>  
                <div className="p-4 md:p-5">
                  <form className="space-y-4" onSubmit={this.handleSubmit}>
                    <div>
                      <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900">
                        Add a Link
                      </label>
                      <input
                        type="text"
                        name="links"
                        id="links"
                        value={this.state.links}
                        onChange={this.handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="https://example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">
                        What is this Links for?
                      </label>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        value={this.state.type}
                        onChange={this.handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Github, Youtube, Google, etc."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      Add Link
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
