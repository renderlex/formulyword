### How it works

```
Image → LaTeX (OCR) → MathML → OMML → Word (native equation)
```

1. **pix2tex** — neural network that recognizes a formula from a photo and returns LaTeX code.
2. **latex2mathml** — converts LaTeX to MathML.
3. **MML2OMML.XSL** — Microsoft XSLT transformation converts MathML to OMML (Office Math Markup Language).
4. **python-docx** — inserts the OMML element as a native Word equation.

### Features

- 📷 **Recognition from photo** — open an image or paste from clipboard (Ctrl+C screenshot → "Paste from clipboard")
- ✂️ **Select one formula** — draw a box around the needed formula in the photo
- ⌨️ **Manual LaTeX input** — type or edit a formula manually
- 📋 **Copy formula** — copies MathML to clipboard, pastes into Word as a native equation (Ctrl+V)
- 💾 **Save to Word** — one or multiple formulas to a .docx file
- 🌐 **Bilingual UI** — Ukrainian and English (toggle button in the top-right corner)

### Requirements

- **Python 3.10+**
- **Microsoft Office** (requires `MML2OMML.XSL` file, shipped with Office)
- Internet connection on first run (downloads OCR model ~500 MB)

### Installation

```powershell
# 1. Clone the repository
git clone https://github.com/<your-username>/formulas-to-word.git
cd formulas-to-word

# 2. Create a virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1

# 3. Install PyTorch (CPU)
pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu

# 4. Install dependencies
pip install -r requirements.txt
```

### Run

```powershell
python formula_to_word.py
```

Or double-click `run.bat`.

### Usage

**Tab "Recognize from photo":**
1. Click **"Open photo"** or **"Paste from clipboard"** (for screenshots).
2. Select **one formula** with the mouse on the image.
3. Click **"Recognize"** — the program will return LaTeX code.
4. Check / edit LaTeX in the text field.
5. **"Preview"** — see how the formula will look.
6. **"Save to Word"** — saves to a .docx file.
7. **"Copy formula"** — copies to clipboard, paste into Word via Ctrl+V.

**Tab "Enter LaTeX":**
- Type a formula manually, preview and save or copy.
- **Batch mode**: add multiple formulas via "Add to list", then save all at once.

### Where to find MML2OMML.XSL

The program searches for this file automatically. Typical locations:

```
C:\Program Files\Microsoft Office\root\Office16\MML2OMML.XSL
C:\Program Files (x86)\Microsoft Office\root\Office16\MML2OMML.XSL
```

If not found automatically, the program will ask you to locate it manually.

---

## Structure

```
formulas-to-word/
├── formula_to_word.py   # Main script (GUI + logic)
├── FormulyWord.spec     # PyInstaller spec (portable EXE build)
├── run.bat              # Quick launcher (Windows)
├── requirements.txt     # Python dependencies
├── .gitignore
└── README.md
```

## Portable build

Для збірки EXE без встановлення Python:

```powershell
pip install pyinstaller
pyinstaller FormulyWord.spec --noconfirm
```
