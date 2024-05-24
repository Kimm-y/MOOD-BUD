import React, { useState } from "react";
import { createJournalEntry } from "./JournalService";
import { toast, ToastContainer } from "react-toastify";

const JournalEntryForm = () => {
  const [journalEntry, setJournalEntry] = useState("");

  const handleJournalSubmit = async (e) => {
    e.preventDefault();
    try {
      toast
        .promise(createJournalEntry(journalEntry), {
          pending: "Sending journal",
          success:
            "Journal Submmited Successfully",
          error: "Journal not sent. Please try again.",
        })
        .then(() => {
          setJournalEntry("");
          console.log("Journal entry submitted successfully");
        });
    } catch (error) {
      console.error("Failed to submit journal entry", error);
    }
  };

  return (
    <>
    <ToastContainer/>
      <form onSubmit={handleJournalSubmit}>
        <div className="mb-3">
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Write your journal entry here..."
            className="form-control"
            rows="10"
          ></textarea>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit Journal Entry
          </button>
        </div>
      </form>
    </>
  );
};

export default JournalEntryForm;
