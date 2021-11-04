//@ts-nocheck
// NPM Packages

// Project files
import CreateDocumentForm from "./CreateDocumentForm";

export default function AddDocuments({ item }) {
  return (
    // <div id="dashboard" className="page-container">
    //   <div className="page">
    <>
        <CreateDocumentForm item={item} />
        <table id="admin-table"></table>
    </>
    //   </div>
    // </div>
    // </div>
  );
}
