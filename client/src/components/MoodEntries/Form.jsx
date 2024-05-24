import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createMoodEntry } from "./MoodService";
import JournalEntryForm from "../JournalEntries/JournalForm";
import { toast, ToastContainer } from "react-toastify";

const MoodEntryForm = () => {
  const [mood, setMood] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast
        .promise(createMoodEntry({ mood }), {
          pending: "Sending mood",
          success: "Mood Submmited Successfully",
          error: "Mood not sent. Please try again.",
        })
        .then(() => {
            setMood("");
            console.log("Mood entry submitted successfully");
        });
    } catch (error) {
      console.error("Failed to submit mood entry:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm">
            <h2 className="text-center mb-4">Mood Tracker</h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select your mood</option>
                  <option value="Amazing">Amazing 😃</option>
                  <option value="Good">Good 🙂</option>
                  <option value="Meh">Meh 😐</option>
                  <option value="Sad">Sad 😔</option>
                  <option value="Angry">Angry 😠</option>
                </select>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>

            <div className="mb-4">
              <JournalEntryForm />
            </div>

            <div className="text-center">
              <Link to="/home">
                <button className="btn btn-secondary btn-lg">BACK HOME</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodEntryForm;
