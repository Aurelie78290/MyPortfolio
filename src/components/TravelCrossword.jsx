import { useEffect, useMemo, useState } from "react";
import { travelCrosswordWords } from "../data/crossword.js";
import "./TravelCrossword.css";

function cellKey(row, col) {
  return `${row},${col}`;
}

function buildGrid(words) {
  const letters = new Map();
  let rows = 0;
  let cols = 0;

  words.forEach(({ word, dir, row, col }) => {
    for (let i = 0; i < word.length; i++) {
      const r = dir === "V" ? row + i : row;
      const c = dir === "H" ? col + i : col;
      letters.set(cellKey(r, c), word[i]);
      rows = Math.max(rows, r + 1);
      cols = Math.max(cols, c + 1);
    }
  });

  const starts = [
    ...new Set(words.map(({ row, col }) => cellKey(row, col))),
  ].sort((a, b) => {
    const [ar, ac] = a.split(",").map(Number);
    const [br, bc] = b.split(",").map(Number);
    return ar - br || ac - bc;
  });
  const numbers = new Map(starts.map((key, index) => [key, index + 1]));

  const numberedWords = words
    .map((entry) => ({ ...entry, number: numbers.get(cellKey(entry.row, entry.col)) }))
    .sort((a, b) => a.number - b.number);

  return {
    letters,
    rows,
    cols,
    numbers,
    across: numberedWords.filter((w) => w.dir === "H"),
    down: numberedWords.filter((w) => w.dir === "V"),
  };
}

function TravelCrossword({ onClose }) {
  const grid = useMemo(() => buildGrid(travelCrosswordWords), []);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const handleChange = (key, value) => {
    const letter = value.slice(-1).toUpperCase();
    setAnswers((prev) => ({ ...prev, [key]: letter }));
    setChecked(false);
  };

  const isComplete = useMemo(() => {
    for (const key of grid.letters.keys()) {
      if (!answers[key]) return false;
    }
    return true;
  }, [answers, grid]);

  const isAllCorrect = useMemo(() => {
    for (const [key, letter] of grid.letters) {
      if (answers[key] !== letter) return false;
    }
    return true;
  }, [answers, grid]);

  const cells = [];
  for (let row = 0; row < grid.rows; row++) {
    for (let col = 0; col < grid.cols; col++) {
      const key = cellKey(row, col);
      const letter = grid.letters.get(key);
      if (!letter) {
        cells.push(<div key={key} className="crossword__cell crossword__cell--blocked" />);
        continue;
      }
      const number = grid.numbers.get(key);
      const value = answers[key] || "";
      const isCorrect = checked && value === letter;
      const isWrong = checked && value && value !== letter;
      cells.push(
        <div key={key} className="crossword__cell">
          {number && <span className="crossword__cell-number">{number}</span>}
          <input
            className={`crossword__cell-input${
              isCorrect ? " crossword__cell-input--correct" : ""
            }${isWrong ? " crossword__cell-input--wrong" : ""}`}
            maxLength={1}
            value={value}
            onChange={(event) => handleChange(key, event.target.value)}
            aria-label={`Case ligne ${row + 1}, colonne ${col + 1}`}
          />
        </div>
      );
    }
  }

  return (
    <div className="crossword__overlay" onClick={onClose}>
      <div
        className="crossword__modal"
        role="dialog"
        aria-modal="true"
        aria-label="Mots fléchés voyages"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="crossword__close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        <h3 className="crossword__title">Mes voyages, en mots fléchés</h3>

        <div className="crossword__content">
          <div
            className="crossword__grid"
            style={{
              gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
              gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
            }}
          >
            {cells}
          </div>

          <div className="crossword__clues">
            <div className="crossword__clue-group">
              <h4>Horizontal</h4>
              <ul>
                {grid.across.map((entry) => (
                  <li key={`h-${entry.number}`}>
                    <strong>{entry.number}.</strong> {entry.clue}
                  </li>
                ))}
              </ul>
            </div>
            <div className="crossword__clue-group">
              <h4>Vertical</h4>
              <ul>
                {grid.down.map((entry) => (
                  <li key={`v-${entry.number}`}>
                    <strong>{entry.number}.</strong> {entry.clue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="crossword__actions">
          <button
            type="button"
            className="crossword__action"
            onClick={() => setChecked(true)}
            disabled={!isComplete}
          >
            Vérifier
          </button>
          <button
            type="button"
            className="crossword__action crossword__action--ghost"
            onClick={() => {
              setAnswers({});
              setChecked(false);
            }}
          >
            Réinitialiser
          </button>
        </div>

        {checked && (
          <p
            className={`crossword__feedback${
              isAllCorrect ? " crossword__feedback--success" : ""
            }`}
          >
            {isAllCorrect
              ? "Bravo, tout est juste !"
              : "Presque ! Certaines cases sont fausses."}
          </p>
        )}
      </div>
    </div>
  );
}

export default TravelCrossword;
