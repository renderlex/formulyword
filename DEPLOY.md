# Як розгорнути сайт на GitHub Pages

## Крок 1: Авторизуйтесь у GitHub CLI
Відкрийте термінал (PowerShell) та виконайте:

```powershell
gh auth login
```

- Оберіть **GitHub.com**
- Оберіть **HTTPS**
- Оберіть **Login with a web browser**
- Скопіюйте код із терміналу, натисніть Enter — відкриється браузер
- Вставте код та авторизуйтесь

## Крок 2: Створіть репозиторій та завантажте файли
```powershell
cd "G:\Мій диск\AI_project\site_for_google"
gh repo create formulyword --public --source=. --push
```

## Крок 3: Увімкніть GitHub Pages
```powershell
gh api repos/{owner}/formulyword/pages -X POST -f "build_type=workflow" -f "source[branch]=master" -f "source[path]=/" 2>$null
```

Або вручну:
1. Відкрийте https://github.com/ВАШ_USERNAME/formulyword
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **master** / **(root)**
5. Save

## Результат
Через 1-2 хвилини сайт буде доступний за адресою:
```
https://ВАШ_USERNAME.github.io/formulyword/
```
