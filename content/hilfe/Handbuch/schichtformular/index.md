---
title: Schichtformular
weight: 2
icon: pen-square
---

Das Schichtformular ist eine einheitliche Bearbeitungsansicht, in der sie Plan- und Ist-Zeiten einer Schicht sowie
Pausen, Mitarbeiteressen und einiges mehr bearbeiten können.

## Position

Unter dem Punkt {{< icon "user" >}} **Position** können Sie über ein Dropdown-Menü den Arbeitsbereich festlegen, in dem die Schicht stattfinden soll. Die verfügbaren Optionen beschränken sich selbstverständlich auf die dem Mitarbeiter zugewiesenen [Arbeitsbereiche](/hilfe/handbuch/arbeitsbereiche).

## Geplant

Unter dem Punkt {{< icon "calendar" >}} **Geplant** können Sie den geplanten Schichtbeginn, das geplante Schichtende sowie die geplante Pause bearbeiten.

> {{< icon "info-circle" >}} **Hinweis:** Dieser Bereich sind nur bearbeitbar, falls der Eintrag in der Zukunft liegt und für
> den zugewiesenen Mitarbeiter und Arbeitsbereich die Zeiterfassung per Stempeluhr oder Mitarbeiter-App aktiviert ist.

### Schichtbeginn und -ende

Über die ersten beiden Felder können Sie den geplanten Schichbeginn sowie das geplante Schichtende eintragen. Diese
Zeiten, zusammen mit den [Zeiterfassungs-Regeln](/hilfe/handbuch/einstellungen/zeiterfassung) für diese Schicht,
bestimmen, wann sich der Mitarbeiter per Stempeluhr oder Mitarbeiter-App, ein- bzw. ausstempeln darf und können später als vergleich zu den tatsächlich gearbeiteten Zeiten herangezogen werden (siehe [Berichte / Arbeitszeit](/hilfe/handbuch/berichte/arbeitszeit) und [Dienstplan / Soll-Ist-Vergleich](/hilfe/handbuch/dienstplan#soll-ist-vergleich)).

> {{< icon "lightbulb" >}} **Tipp:** Lassen Sie eines oder beide dieser Felder leer, um ein Schicht mit offenem Beginn
> bzw Ende zu planen. Dies ist zum Beispiel dann nützlich, wenn ein Mitarbeiter zu einer bestimmten Zeit zur Schicht
> erscheinen soll, das Schichtende aber vom Tagesgeschäft abhängt und spontan entschieden wird.

### Pause

Über das rechte Eingabefeld (erkennbar durch das {{< icon "coffee" >}} Symbol) können Sie die geplante Pause für eine
Schicht eintragen. Dieses Feld ist nur bearbeitbar, falls der Pausenmodus **Geplant** oder **Geplant + Manuell** für
diese Schicht gewählt ist. Mehr über diese Pausenmodi und wie geplante Pausen zur Anwendungen kommen, erfahren Sie in
dem Hilfeartikel [{{< icon "cog" >}} Einstellungen / {{< icon "stopwatch" >}}
Zeiterfassung](/hilfe/handbuch/einstellungen/zeiterfassung#pausenberechnung).

## Geleistet

Unter dem Punkt {{< icon "clock" >}} **Geleistet** können Sie den tatsächlichen Schichtbeginn, das tatsächliche Schichtende sowie die genommene Pause bearbeiten.

> {{< icon "info-circle" >}} **Hinweis:** Dieser Bereich sind nur bearbeitbar, falls der Eintrag in der Vergangenheit
> liegt oder für den zugewiesenen Mitarbeiter und Arbeitsbereich die Zeiterfassung per Stempeluhr oder Mitarbeiter-App
> deaktiviert ist.

### Schichtbeginn und -ende

Über die ersten beiden Felder können Sie den tatsächlichen Schichbeginn sowie das tatsächliche Schichtende eintragen.
Anhand dieser Zeiten errechnet Pentacode automatisch die geleistete Arbeitszeit und eventuell anfallenden Zuschläge.

Bei der **Zeiterfassung per Digitaler Stempeluhr oder Mitarbeiter-App** werden diese Zeiten automatisch befüllt, sobald der
Mitarbeiter sich in die entsprechende Schicht ein- oder ausstempelt, können aber im nachhinein jederzeit bearbeitet werden.

Ist die Zeiterfassung per Digitaler Stempeluhr oder Mitarbeiter-App **nicht aktiviert**, müssen Sie die geleisteten Arbeitszeiten immer manuell eintragen.

### Pause

Über das rechte Eingabefeld (erkennbar durch das {{< icon "coffee" >}} Symbol) können Sie die genommene Pause für eine
Schicht bearbeiten. Dieses Feld wird automatisch befüllt, sobald die Schicht beendet wurde, kann aber im nachhinein
jederzeit bearbeitet werden.

> {{< icon "info-circle" >}} **Hinweis:** Falls für die aktuelle Schicht der
> [Pausenmodus](/hilfe/handbuch/einstellungen/zeiterfassung#pausenberechnung) **Automatisch** bzw. **Automatisch +
> Manuell** gewählt ist, befüllt Pentacode dieses Feld automatisch basierend auf der Länge geleisteten Arbeitzeit.
> **Dies passiert aber nur dann, wenn noch keine Pause eingetragen wurde!** Das heißt sollten Sie Schichtbeginn oder
> -ende im Nachhinein bearbeiten wird das Pausenfeld **nicht** automatisch mit der neuen Pausenzeit überschrieben. Sie
> können eine Neuberechnung der automatischen Pause aber veranlassen, indem Sie den aktuellen Wert aus dem
> Pausenfeld löschen und das Feld anschließend per Mausklick oder Tabulator-Taste verlassen.
