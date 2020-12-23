---
title: Tagesübersicht
weight: 3
icon: clock
anchors:
- hash: zeiterfassung-mit-stempeluhr
  title: Zeiterfassung MIT Stempeluhr
- hash: pausen-&-mahlzeiten
  title: Pausen & Mahlzeiten
- hash: provision
  title: Provision
- hash: änderung-von-geloggten-zeiten
  title: Änderung von geloggten Zeiten
- hash: status
  title: Status
- hash: zeiterfassung-ohne-stempeluhr
  title: Zeiterfassung OHNE Stempeluhr
- hash: änderung-von-arbeitszeiten
  title: Änderung von Arbeitszeiten
- hash: pausen
  title: Pausen
- hash: abteilungen-filtern
  title: Abteilungen filtern

---
Im Hauptmenü "**Zeiterfassung**" sehen Sie die Mitarbeiter, die am jeweils gewählten Tag **laut Dienstplan** zur Arbeit eingeteilt sind.

Die Mitarbeiter erscheinen **chronologisch** nach geplantem Dienstbeginn, bzw. nach **Zeitpunkt des Log-ins** für den Fall, dass ein Mitarbeiter eine spontane, also nicht geplante Schicht angetreten hat.

## Zeiterfassung MIT Stempeluhr

Neben dem Namen des Mitarbeiters stehen in der ersten Zeile die **geplanten Arbeitszeiten** , darunter die **aktuellen Log-Zeiten**.

{{< figure caption="Hier sehen Sie geplante  und tatsächlich geloggte Arbeitszeiten in einer Gegenüberstellung" >}}

![](/uploads/log-in.png)

{{< /figure >}}

Sollte sich ein Mitarbeiter außerhalb der von Ihnen festgelegten "Karenz-Zeit" eingeloggt haben oder eine Schicht angetreten haben, für die er nicht geplant war, sehen Sie in der ersten Zeile ein "**?**".

Dieses Zeichen weist Sie darauf hin, dass hier **Arbeitszeit** entstanden ist, die **so nicht geplant** war.

{{< figure caption="Diese Arbeitszeit war nicht geplant. Der Mitarbeiter hat über die Stempeluhr eine '**Spontane Schicht**' angetreten" >}}

![](/uploads/spontane-schicht.png)

{{< /figure >}}

### Pausen & Mahlzeiten

Die **Pausenzeiten** werden **automatisch** und nach den von Ihnen vorgegebenen Regeln ausgewiesen, ebenso die **Anzahl** der **automatisch gebuchten Mahlzeiten** (sehen Sie hierzu den Hilfeartikel "Regeleinstellungen der Zeiterfassung").

{{< figure caption="Pausen werden am Ende des Arbeitstages errechnet, Mahlzeiten mit Schichtbeginn gebucht" >}}

![](/uploads/pausen-mahlzeiten.png)

{{< /figure >}}

### Provision

Wenn Sie beim Mitarbeiter unter "**Vertrag**" bei "**Provision**" einen Wert **>0** eingegeben haben, erscheint beim betreffenden Mitarbeiter ein **Eingabefeld**. Hier tragen Sie dessen **Umsatz** ein.

{{< figure caption="Hier geben Sie bei Provisionsbezahlung den Umsatz des Mitarbeiters ein, den er laut Kassenbericht erzielt hat" >}}

![](/uploads/provision1.png)

{{< /figure >}}

### Status

Am rechten Rand sehen Sie den jeweiligen **Status**, der immer **in Echtzeit**, also zum Zeitpunkt Ihres Betrachtens, angezeigt wird.

Zum Status eines Mitarbeiters gibt es folgende Meldungen:

**ausstehend | verspätet | aktiv | Pause | fertig | nicht abgemeldet**.

### Änderung von geloggten Zeiten

**Geloggte Zeiten** können Sie **jederzeit** bearbeiten / korrigieren.

Bei **aktuell laufenden** oder noch **nicht begonnen Schichten** können noch **keine Zeiteingaben** manuell vorgenommen werden. Zeiten können in diesem Fall ausschließlich durch Log-in/Log-out des Mitarbeiters über die Stempeluhr übernommen werden.

Lediglich beim Status "**verspätet**" oder "**nicht abgemeldet**" können Daten **manuell** in die Rot gekennzeichneten Felder **eingegeben** werden. **Abgeschlossene Arbeitstage** können jederzeit korrigiert werden.

## Zeiterfassung OHNE Stempeluhr

Wenn Sie ohne die Stempeluhr von Pentacode arbeiten, geben Sie die Arbeitszeiten **manuell IM DIENSTPLAN** ein.

Im Menüpunkt "**Zeiterfassung**" sind **geplante** Arbeitszeit und tatsächliche Arbeitszeit immer **identisch**. Es gibt deshalb auch nur den Status "**fertig**".

{{< figure caption="Wenn Sie ohne Stempeluhr arbeiten, sind 'geplante Arbeitszeit' und 'tatsächliche Arbeitszeit' immer identisch" >}}

**![](/uploads/ohne-stempeluhr1.png)**

{{< /figure >}}

### Änderung von Arbeitszeiten

Sie können die Arbeitszeiten zu **jedem Zeitpunkt ändern**. Eine **Änderung** in "**Zeiterfassung**" führt automatisch zur **entsprechenden Änderung** der Zeiten im "**Dienstplan**", jede Änderung im "Dienstplan" zur entsprechenden Änderung in "Zeiterfassung".

### Pausen

Die **Pausen** werden **automatisch** gesetzt. Als Regel für die Erfassung der Pausen muss unter "Einstellungen", dort "Zeiterfassung" "**Automatische Pause**" gesetzt sein!

Wenn Sie in der Folge eine einmal eingetragene Arbeitszeit ändern, wird die mit dem ersten Eintrag gesetzte Pausenzeit jedoch **nicht** geändert. Sollte sich die Dauer des Arbeitstages soweit ändern, dass die Pausenzeit verlängert oder verkürzt wird oder ganz entfällt, ist eine entsprechende **Korrektur der Pausenzeit manuell** vorzunehmen!

{{< figure caption="Unterschreitungen der gesetzlichen Pausen werden ausgewiesen und müssen manuell korrigiert werden" >}}

![](/uploads/pausenkorrektur-manuell.png)

{{< /figure >}}

## Abteilungen filtern

Wenn in Ihrem Unternehmen sehr viele Mitarbeiter beschäftigt sind, kann die Ansicht übersichtlicher dargestellt werden, indem Sie einzelne Abteilungen durch das Entfernen eines Button abwählen.

Die abgewählten Abteilungen sind dann nicht mehr sichtbar.

{{< figure caption="Sie können Abteilungen durch Entfernen des Buttons ausblenden" >}}

![](/uploads/abteilungen-abwahlen.png)

{{< /figure >}}