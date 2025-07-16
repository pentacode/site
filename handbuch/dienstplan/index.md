---
layout: layouts/single.njk
keywords: []
title: Dienstplan
weight: 30
icon: table
---

In diesem Hilfeartikel erfahren Sie, wie Sie selbst komplexe Dienstpläne schnell
und einfach erstellen können. Wenn Sie Ihren ersten Dienstplan erstellen, werden
Sie feststellen, dass sich Ihnen alles, was hier als Text beschrieben ist, sehr
intuitiv erschließen wird. Lesen Sie bitte trotzdem diesen Artikel und fangen
Sie dann einfach mit dem Schreiben an!

Die Dienstplanansicht in Pentacode zeigt Ihnen standardmäßig eine Woche von Montag bis
Sonntag in tabellarischer Ansicht. Abteilungen werden untereinander in der
Reihenfolge dargestellt, die Sie unter [Einstellungen /
Arbeitsbereiche]\(/handbuch/einstellungen/arbeitsbereiche/#reihenfolge-der-abteilungen-ändern)
definiert haben. In den jeweiligen Abteilungen erscheinen jeweils alle
Mitarbeiter, denen mindestens eine Position in dieser Abteilung zugewiesen ist.

{% figure caption="" %}
<img src = "dienstplan_uebersicht.webp" />
{% endfigure %}

## Mitarbeiter Sortieren

Standardmäßig erscheinen Mitarbeiter in der Reihenfolge, in der sie in Pentacode
angelegt wurden. Um die Position eines Mitarbeiters nach oben oder unten zu
verschieben, fahren Sie mit der Maus über Bild/Namen des Mitarbeiters und
klicken Sie den {% icon "caret-down" %} oder {% icon "caret-up" %} Pfeil.

## Zeitraum Wechseln

Den Zeitraum wechseln Sie in der Kalenderansicht (mittig oben). Dort können Sie
mit den Pfeiltasten zwischen Wochen wechseln oder mit einem Klick auf den Kalender
einen beliebigen Zeitraum auswählen. 

Größere Zeiträume können nützlich sein, wenn Sie den Dienstplan für mehrere
Wochen oder einen ganzen Monat im Voraus erstellen. 

{% figure caption= "Den Dienstplan für die nächsten 3 Wochen auf einen Blick? Kein Problem!"%}
<img src= "dienstplan_zeitraum.gif" />
{% endfigure %}

## Kalendereintrag hinzufügen

Wollen Sie ihren Dienstplaner auf wichtige Daten aufmerksam machen oder ihrer Belegschaft weitere Informationen zum Tagesgeschäft, wichtige Neuerungen oder eine einfache Erinnerung zukommen lassen? All das können Sie über Kalendereinträge erledigen. Diese können Sie einfach in der
Dienstplanübersicht erstellen.

1. Fahren Sie mit dem Cursor über einen Tag der ausgewählten Woche.
2. Klicken Sie auf {% button icon="sticky-note", label="Notiz" %}.
3. Geben Sie die Nachricht an ihre Mitarbeiter ein.
4. Wählen Sie den **Zeitraum** aus, in der die Notiz angezeigt werden soll -
   standardmäßig ist das nur der ausgewählte Tag.
5. Wählen Sie die **Abteilungen** aus, welche die Notiz sehen sollen.
6. Wählen Sie, ob die Notiz den Mitarbeitern **in der Mitarbeiter-App angezeigt werden soll**, indem Sie  'Als Dienstplannotiz Anzeigen' an- oder abwählen. 
7. Wählen Sie ob Sie dem Kalendereintrag eine Urlaubssperre zuteilen wollen, mehr dazu [weiter unten](#urlaubssperre-einrichten)
8. Mit {% button label="Speichern" %} wird der Kalendereintrag gespeichert. 

{% figure caption= "Ihre Mitarbeiter sollen mit einer Lieferung rechnen? Mit einer Dienstplannotiz sind sie schnell erinnert."%}
<img src= "kalendereintrag.gif" />
{% endfigure %}

> {% icon "lightbulb" %} **Tipp:** Sie können durch einen Klick auf das {% icon "tv-retro" %} **Icon** im rechten oberen Eck durch an- und abwählen des grünen Hakens bei Kalendereinträge Notizen an und Abwählen.

### Kalendereintrag löschen

Um die Notiz eines oder mehrerer Tage zu löschen klicken Sie einfach über die
Notiz in der Dienstplanübersicht. Nun können Sie zum einen die **Notiz
bearbeiten**, durch einen Klick auf den {% icon "trash-alt" %}-**Button** können
Sie die Notiz aber auch komplett löschen.

## Urlaubssperre einrichten

Über die Kalendereinträge können Sie auch Urlaubssperren erteilen. Erstellen Sie dazu einen Kalendereintrag, wählen den gewünschten Zeitraum und unter 'Urlaubssperre' eine der folgenden Optionen aus:
- **Keine Urlaubssperre:** Mitarbeiter können Urlaubsanträge stellen und Manager können Anträge gewähren oder Urlaub erteilen.
- **Urlaube Komplett sperren:** Mitarbeiter können keine Urlaubsanträge stellen und Manager können in dieser Zeit keinen Urlaub erteilen.
- **Nur Urlaubsanträge sperren:** Mitarbeiter können keine Urlaubsanträge stellen, Manager können jedoch Mitarbeitern in diesem Zeitraum weiterhin Urlaub erteilen. 

## Schulferien anzeigen lassen

Wenn Sie die Kalendereinträge im Ansichtsmenü {% icon "tv-retro" %} angewählt haben, werden Ihnen automatisch die Schulferien des Bundeslandes angezeigt, dass in ihrem Standort hinterlegt ist. Damit diese Funktion verfügbar ist, müssen Sie die [Standorteinstellungen](/handbuch/einstellungen/arbeitsbereiche/) ausfüllen.

## Wetteranzeige

Um bei ihrer Dienstplanung auch das aktuelle Wetter berücksichtigen zu können, zeigt Ihnen Pentacode die aktuelle Vorhersage für die nächsten 16 Tage an. Dabei werden die [Daten des Standorts](/handbuch/einstellungen/arbeitsbereiche/) verwendet, wodurch sich **die Vorhersage an den ausgewählten Standort anpasst.**

Um die Wetteranzeige an- und auszuschalten, klicken Sie auf das ({% icon "tv-retro" %}-Icon) und setzen bei **Wetter** einen grünen Haken.

Pentacode zeigt Ihnen anschließend eine Übersicht mit Temperatur und Regenwahrscheinlichkeit für jeden Tag. Für genauere Vorhersagen fahren Sie mit dem Cursor über den jeweiligen Tag.

{% figure caption= "Mit einem Mouse-over sehen Sie die genauen Details der Wettervorhersage." %}
<img src= "wettervorhersage.gif" />
{% endfigure %}

## Dienstplan-Tabs

Mithilfe der Dienstplan-Tabs in der oberen linken Ecke des Dienstplan können Sie schnell
zwischen verschiedenen Standorten und [Filtern](#filtern--suchen) wechseln.

### Tab Bearbeiten

Sie können Ihre vorhandenen Dienstplan-Tabs bearbeiten, indem Sie den Tab
auswählen und auf das {% icon "filter" %} **Symbol** klicken. Es öffnet sich ein
Bearbeitungsfenster, in dem Sie den Namen und die Filter für diesen Tab wählen
können (mehr über Dienstplan-Filter erfahren Sie unter [Filtern &
Suchen](#filtern--suchen)). Um den Bearbeitungsvorgang zu beenden, klicken Sie
einfach irgendwo außerhalb des Popovers.

### Neuen Tab Erstellen

Einen neuen Tab erstellen Sie, indem Sie auf den {% button icon =
"rectangle-history" %} **Button** mit dem aktuellen Tab und anschließend auf {%
icon "plus" %} klicken. Es wird automatisch ein neuer Tab
hinzugefügt und es öffnet sich das Bearbeitungsfenster.

### Tab Löschen

Um einen Tab zu löschen, öffnen Sie das [Bearbeitungsfenster](#tab-bearbeiten) und klicken auf den
{% icon "trash" %}-**Button** in der rechten oberen Ecke.

> {% icon "lightbulb" %} Da immer mindestens ein Tab existieren muss, ist der Löschen-Button
> deaktiviert, falls Sie nur ein Tab haben.

## Filtern & Suchen

Beim Arbeiten mit mehreren Abteilungen und Dutzenden von Mitarbeitern kann das
Dienstplan-Schreiben schnell zu einer unübersichtlichen Angelegenheit werden.
Pentacodes Dienstplan-Filter erlauben Ihnen, die Anzeige auf bestimmte
Abteilungen, Eintragsarten und sogar Zeiträume zu beschränken. So behalten Sie
den Überblick und können ohne Ablenkung arbeiten.
**Der Filter ändert dabei jedoch nichts an den Einträgen im Dienstplan!** Sehen
Sie jeden Tab als eine spezielle Brille mit eigenen Filtern, um nur das aktuell
Relevante im Dienstplan zu sehen.

Um die Filter-Einstellungen eines Tabs zu bearbeiten, klicken Sie auf das {%
icon "filter" %} **Symbol** (Siehe auch [Tab Bearbeiten](#tab-bearbeiten)).

{% figure caption= "Mit Abteilungs- und Zeitfiltern können Sie sich nur die gewünschten Spätschichten anzeigen lassen." %}
<img src= "dienstplan_filter.gif" />
{% endfigure %}

> {% icon "lightbulb" %} **Tipp:** Wechseln Sie häufig zwischen mehreren
> Filter-Einstellungen? Durch mehrere Dienstplan-Tabs mit verschiedenen Filtern können Sie
> schnell zwischen unterschiedlichen Ansichten wechseln!

### Mitarbeiter Suchen

Wollen Sie schnell einen bestimmten Mitarbeiter finden? Dann geben Sie einfach
den Namen oder die Personalnummer in das Suchfeld in der linken oberen Ecke des
Dienstplans ein!

## Tagesansicht

Der Klick auf einen vorhandenen Dienstplaneintrag oder ein leeres Feld öffnet die
**Tagesansicht** für den entsprechenden Mitarbeiter und Tag. Hier finden Sie
Mitarbeiter-spezifische Informationen sowie verschiedene Optionen zur
**Erstellung, Bearbeitung und Löschung von Dienstplaneinträgen** (mehr dazu in den
folgenden Kapiteln).

Um zu einem anderen Mitarbeiter oder Tag zu wechseln, klicken Sie einfach in das
entsprechende Feld.

> **Tipp**: Mit den Tasten {% key "w", "mono" %} **(auf)**, {% key "s", "mono" %} **(ab)**, {% key "a", "mono" %} **(links)** und {% key "d", "mono" %} **(rechts)** wechseln Sie schnell zwischen Mitarbeitern, Einträgen und Tagen.
> Diese Tasten sind auf Ihrer Tastatur ähnlich angeordnet wie die Pfeiltasten.
> So können Sie einfach Ihre linke Hand auf den Tasten ruhen lassen und "blind"
> zwischen Einträgen, Mitarbeitern und Tagen springen. Über die {% key "Esc", "mono" %} -**Taste** schließen sie die Tagesansicht. Probieren Sie es aus!

{% figure caption="In der Tagesansicht können Sie Einträge bearbeiten und Informationen zum gewählten Mitarbeiter einsehen." %}

<img src = "tagesansicht.webp" />

{% endfigure %}

## Dienstzeiten Eintragen

Um manuell eine neue Dienstzeit zu planen, öffnen Sie zunächst die
[Tagesansicht](#tagesansicht) für den gewünschten Mitarbeiter, Tag und
Abteilung (z.B. durch Klicken in das entsprechende Feld). Sollte der
entsprechende Tag noch leer sein, öffnet sich automatisch das Menü zur
Erstellung eines neuen Eintrags. Andernfalls wählen Sie hier **Neue Schicht**
(Falls ein Mitarbeiter mehrere Positionen in dieser Abteilung einnehmen kann,
können Sie die gewünschte Position aus einer Liste wählen). Es öffnet sich ein
Formular in dem Sie nun die gewünschte Beginn- und Endzeit eintragen können.

## Schichtvorschläge

Die **Schichtvorschläge** in Pentacode sind ein mächtiges Hilfsmittel, das Ihnen
die Erstellung neuer Dienstpläne deutlich erleichtern kann. Das Programm
analysiert automatisch Ihre bereits geschriebenen Dienstpläne auf sich
wiederholende Planungsmuster und kann so häufig sehr genau vorhersagen, wann und
in welcher Position ein Mitarbeiter in einer bestimmten Abteilung und an einem
bestimmten Wochentag eingeteilt werden soll. Es gibt zwei Arten von
Schichtvorschlägen:

### Globale Schichtvorschläge

Auf der rechten Seite des Dienstplans finden Sie die **globalen
Schichtvorschläge**, eine einfache Liste von häufig verwendeten Planzeiten.
Damit Ihnen diese angezeigt werden, müssen Sie sie vorher in den
[Planungshilfen](#planungshilfen)(das {% icon "tv-retro" %}-Icon) **'Vorschläge & Favoriten'** anwählen. Um
einen Eintrag aus einer globalen Schichtvorlage zu erstellen, ziehen Sie diese
einfach per **Drag & Drop** in das entsprechende Feld.

{% figure caption="Globale Schichtvorschläge sind per Drag&Drop im Handumdrehen eingetragen." %}

<img src = "globale_schichtvorschlaege.gif"/>

{% endfigure %}

#### Schichtvorschläge favorisieren

**Klicken Sie auf den Stern** neben einem globalen Schichtvorschlag, wird dieser
favorisiert. Wenn Sie auf den Stern neben {% button icon="lightbulb-on",
label="Vorschläge & Favoriten" %} klicken, werden Ihnen **nur die favorisierten
Schichtvorschläge** angezeigt. So können Sie besonders häufig verwendete Schichten
ohne Scrollen mehrfach in den Dienstplan einfügen. Ein erneutes Klicken auf den
Stern neben dem Schichtvorschlag, **entfavorisiert** diesen.

### Tages- und MA-spezifische Vorschläge

Die intelligentere Variante von Schichtvorschlägen finden Sie in der
[Tagesansicht](#tagesansicht) im Menü {% icon "plus" %} **Neuer Eintrag**.
Hier werden bis zu 5 Vorschläge angezeigt, basierend auf dem Wochentag, die für
den Mitarbeiter verfügbaren Positionen und den zuvor in dieser Abteilungen
geplanten Dienstzeiten. Klicken Sie auf einen gewünschten Vorschlag, um eine neue
Schicht mit den vorgeschlagenen Daten zu erstellen. Anschließend haben Sie
selbstverständlich noch die Möglichkeit, Änderungen vorzunehmen.

> **Tipp:** Am rechten Rand jedes Schichtvorschlags sehen Sie eine Ziffer (z.B.:
> {% key "1",  "mono" %}). Diese deutet an, dass Sie den Vorschlag über die
> entsprechende Ziffer auf Ihrer Tastatur wählen können. In Kombination mit den
> Tasten {% key "w" %} {% key "s", "mono" %} {% key "a", "mono" %} {% key "d", "mono" %} (siehe [Tagesansicht](#tagesansicht)) können Sie
> nun rasend schnell arbeiten, ohne die Hände von der Tastatur zu nehmen!

## Nicht zugewiesene Schichten

Wenn Sie Schichten besetzen müssen, diese aber keinen konkreten Mitarbeiter
zuordnen wollen, können Sie auch "nicht zugewiesene Schichten ausschreiben".
Diese werden allen Mitarbeitern als verfügbar angezeigt, die in der gleichen
Abteilung tätig sind. Die Mitarbeiter können sich anschließend **freiwillig für
die Schicht eintragen** und diese somit "vom Markt nehmen".

Aktivieren Sie Nicht Zugewiesene Schichten zuerst in den
[Planungshilfen](#planungshilfen)(das {% icon "tv-retro" %}-Icon) mit einem
Klick auf das Feld {% button icon="user-slash", label="Nicht Zugewiesen" %}.
Gehen Sie anschließend wie bei normalen [Dienstzeiten](#dienstzeiten-eintragen)
vor. Sie müssen lediglich statt eines Mitarbeiters die Zeile "**Nicht
zugewiesen**" auswählen.

{% figure caption="So erstellen Sie Schichten, die allen verfügbaren Mitarbeitern der Abteilung zur Auswahl stehen" %}

<img src="nicht_zugewiesen.webp" />

{% endfigure %}

## Fehltage Eintragen

Fehltage wie **Urlaub** und **Krank** können auf zwei verschiedenen Wegen
eingetragen werden.

### Mit Drag & Drop

Wenn Sie in den [Planungshilfen](#planungshilfen) (das {% icon "tv-retro"
%}-Icon) **'Vorschläge & Favoriten'** angewählt haben finden Sie auf der rechten
Seite eine Liste der im Dienstplan verfügbaren Fehltage **Urlaub**, **Krank**,
**Guttag** und **Frei**. Diese können Sie einfach per **Drag & Drop** in die
gewünschten Felder ziehen.

### Über die Tagesansicht

Fehltage können außerdem über das Tagesmenü eingetragen werden. Hierzu öffnen
Sie zunächst die [Tagesansicht](#tagesansicht) für den gewünschten Mitarbeiter
und Tag, und klicken auf die gewünschte Art von Fehltag.

> {% icon "lightbulb" %} **Tipp:** Fehltage können auch über die Tastaturkürzel {% key "u", "mono" %} **(Urlaub)**, {% key "k", "mono" %} **(Krank)**, {% key "g", "mono" %} **(Guttag)** und {% key "f", "mono" %} **(Frei)** gewählt werden!

## Einträge Verschieben

Möchten Sie eine Schicht einem neuen Mitarbeiter zuweisen oder in einen anderen
Tag verschieben? Dies funktioniert ganz einfach über **Drag & Drop**. Packen Sie
einfach den gewünschten Eintrag mit der Maus (linke Maustaste gedrückt halten)
und ziehen sie ihn an den gewünschten Ort (linke Maustaste loslassen, um den
Vorgang abzuschließen). Pentacode hebt automatisch nur die Mitarbeiter hervor,
denen die entsprechende Position zugewiesen ist.

## Einträge Duplizieren

Das Duplizieren von Einträgen funktioniert fast identisch wie das Verschieben.
Sie packen den gewünschten Eintrag mit der Maus (linke Maustaste gedrückt
halten) und ziehen sie ihn an den gewünschten Ort. Wenn Sie nun zusätzlich die
{% key "alt", "mono" %}-**Taste** gedrückt halten wird der Eintrag nicht
verschoben, sondern dupliziert. Es wird an dem neuen Ort ein weiterer Eintrag
mit der gleichen Position, Anfangs- und Endzeit erstellt (oder im Fall von
Fehltagen mit der gleichen Fehltags-Art).

## Einträge Löschen

Um einen Eintrag zu löschen, klicken sie einfach auf das {% icon "times" %} in
der rechten oberen Ecke des Eintrags. Dies funktioniert sowohl in der
Tabellenansicht als auch in der [Tagesansicht](#tagesansicht).

> {% icon "lightbulb" %} **Tipp:** Selektierte Einträge können außerdem über das
> Tastenkürzel {% key "⇧" %} + {% key "⌫" %} gelöscht werden!

## Veröffentlichen & Teilen

Zwar werden alle Änderungen, die Sie im Dienstplan vornehmen, kontinuierlich und
automatisch gespeichert. Aber die Kontrolle, wann Sie diese Änderungen für Ihre
Mitarbeiter öffentlich machen, bleibt bei Ihnen.

> **Achtung:** Für das Veröffentlichen von Dienstplänen wird eine explizite
> [Berechtigung]\(/handbuch/mitarbeiter/zugaenge-rechte/) benötigt.

### Änderungen einsehen und auswählen

Wenn Sie die vorgenommenen Änderungen vor dem veröffentlichen noch einmal
einzeln aufgelistet sehen wollen, klicken Sie auf das {% icon "pencil"%} Symbol
am rechten oberen Rand. Es wird Ihnen eine Liste der Änderungen mit dem
betroffenen Mitarbeiter und dem Zeitpunkt der Änderung angezeigt. 

Sollten Sie nur einen Teil der vorgenommenen Änderungen veröffentlichen wollen,
wählen Sie bei einzelnen Änderungen den grünen Haken ab. Abgewählte Änderungen
werden nicht veröffentlicht aber weiterhin gespeichert. 


### Änderungen Veröffentlichen

Im Dienstplan-Menü auf der rechten Seite zeigt Ihnen der orangene Button mit
dem {% icon "pencil" %} Symbol an, wie viele Änderungen seit der letzten
Veröffentlichung gemacht wurden. Um diese Änderungen zu veröffentlichen, klicken
Sie auf diesen Button. Es öffnet sich ein Bestätigungs-Dialog, in dem alle
Änderungen erneut aufgelistet sind. Hier können Sie [auswählen](#änderungen-einsehen-und-auswählen), welche Änderungen Sie veröffentlichen wollen. Klicken Sie auf {% button icon =
"lightbulb", label = "Veröffentlichen" %} zeigt Pentacode an, welche betroffenen
Mitarbeiter kontaktiert werden. Die Änderungen sind nun in der Mitarbeiter-App
und auf der öffentlichen [Dienstplan-Seite](#dienstplan-teilen) einsehbar. **Von
Änderungen betroffene Mitarbeiter werden automatisch per E-Mail benachrichtigt**
und erhalten einen Link zu ihrem persönlichen Dienstplan.

> {% icon "lightbulb" %} **Tipp:** Um Mitarbeiter von Änderungen an ihrem
> persönlichen Dienstplan benachrichtigen zu können, wird eine Emailadresse
> benötigt. Diese können Sie in den
> [Stammdaten]\(/handbuch/mitarbeiter/stammdaten/) der einzelnen
> Mitarbeiter hinterlegen.

{% figure caption="Im Dienstplan-Menü sehen Sie, wie viele Änderungen seit der letzten Veröffentlichung gemacht wurden." %}

<img src = "veröffentlichen.gif" />

{% endfigure %}

### Änderungen zurücksetzen

Im gleichen Menü zum [Veröffentlichen von Änderungen](#änderungen-veröffentlichen) können Sie die vorgenommenen Änderungen auch zurücksetzen. Klicken Sie dazu auf {% button icon="rotate-left", label="Rückgängig machen" %} und bestätigen Sie den Vorgang. Es werden auch hier nur die [ausgewählten Änderungen](#änderungen-einsehen-und-auswählen) zurückgesetzt. 

## Dienstplan Teilen

Sie können ihren Dienstplan auch mit Personen teilen, die keinen Zugang zur
Mitarbeiterapp haben. Klicken Sie dazu auf den {% icon "share" %}-**Button** im
rechten oberen Eck. Nun zeigt Ihnen Pentacode einen **Link** an, über den
Externe den Dienstplan einsehen aber **nicht verändern** können.

- Klicken Sie auf {% button icon="clipboard", label="Kopieren" %}, um den Link an
  anderer Stelle mit {% key "strg" %} **+** {% key "V" %} einzusetzen.
- Klicken Sie auf {% button icon="envelope", label="Versenden" %}, um ihrer
  Belegschaft eine Email mit dem Link zum Dienstplan zu schicken.

**Wichtig!** Sie teilen immer nur den Teil des Dienstplans, der Ihnen im Filter
des aktuellen Tabs angezeigt wird und bereits
[veröffentlicht](#änderungen-veröffentlichen) ist (mehr Info siehe
[Teil-Dienstpläne](#teil-dienstpläne-veröffentlichen)).

> {% icon "person-chalkboard" %} **Beispiel:** In unserem Tab "Frühschicht" werden Spät- und
> Managementschichten nicht angezeigt, deshalb sind diese auch nicht Teil des
> geteilten Dienstplans. Zusätzlich haben wir einige Änderungen geplant, welche
> wir noch nicht veröffentlicht haben - auch diese werden im geteilten Dienstplan
> nicht angezeigt.

{% figure caption="Im geteilten Dienstplan werden nur Schichten angezeigt, die veröffentlicht und Teil des geteilten [Dienstplantabs](#dienstplan-tabs) sind." %}

<img src= "dienstplan_teilen.gif" />

{% endfigure %}

## Dienstplan Drucken

Für die Papiermenschen unter Ihnen gibt es selbstverständlich auch eine
Druckfunktion. Es wird hier zwischen zwei Varianten unterschieden.

### Aktueller Bearbeitungsstatus

Den aktuellen Bearbeitungsstatus **inklusive nicht veröffentlichter Änderungen**
können Sie über das Tastenkürzel {% key "strg", "mono" %} {% key "P", "mono" %}
(bzw. {% key "cmd", "mono" %} {% key "P", "mono" %} auf MacOS) oder über das
Browser-Menü Drucken.

### Veröffentlichter Dienstplan

Die Druckoption für den "fertigen" bzw. veröffentlichten Dienstplan finden Sie
im gleichen Menü wie [Dienstplan teilen](#dienstplan-teilen). Klicken Sie dazu
erst auf den {% icon "share" %}-**Button** und anschließend auf {% button
icon="print", label="Drucken" %}.

> **Beachten Sie:** Sie drucken stets nur den veröffentlichten Dienstplan.

### Teil-Dienstpläne Veröffentlichen

Aktive [Dienstplan-Filter](#filtern--suchen) werden beim
Veröffentlichungsvorgang automatisch berücksichtigt, dies heißt, es werden nur
Einträge veröffentlicht, die den Filterkriterien im aktiven Tab entsprechen.
Wenn Sie nur den Dienstplan für eine bestimmte Abteilung oder einen bestimmten
Zeitraum veröffentlichen wollen, müssen Sie also nur die entsprechenden Filter
setzen, bevor Sie auf **Veröffentlichen** klicken.

## Dienstplan-Vorlagen

Viele Betriebe haben Arbeitsbereiche, in denen sich Arbeitszeiten von Woche zu
Woche kaum oder gar nicht ändern. In diesen Fällen können Dienstplan-Vorlagen
Ihnen eine Menge Arbeit sparen! Das Prinzip ist einfach: **Sie schreiben den
Dienstplan für eine Woche und speichern diesen als Vorlage** ab, die Sie dann mit
wenigen Klicks in anderen Wochen anwenden können.

### Vorlage Erstellen

Um eine Vorlage zu erstellen, navigieren Sie zunächst in eine "leere" Woche und
tragen die gewünschten Dienstzeiten ein. Falls Sie nur eine bestimmte Abteilung
oder einen bestimmten Zeitraum in Ihrer Vorlage speichern möchten, können Sie
die zu speichernden Schichten einschränken, indem sie die
[Filterkriterien](#filtern--suchen) des aktiven Tabs bearbeiten. Öffnen Sie nun
die Vorlagen-Liste mit einem Klick auf den Button {% icon "floppy-disc-circle-arrow-right" %}
**Vorlagen** und klicken auf den Button {% icon "plus" %} **Neue Vorlage**.

Im darauffolgenden Dialog müssen Sie der Vorlage nur noch einen Namen geben -
können aber auch wählen, Schichten welcher Abteilungen in der Vorlage
gespeichert werden sollen.
Klicken Sie **Speichern**, um den Vorgang abzuschließen. Die Vorlage erscheint
nun in der Liste Ihrer Vorlagen!

> **Achtung:** Wählen Sie für die Erstellung einer Dienstplanvorlage immer eine
> **zukünftige Woche**! Es werden nur Einträge mit vorhandenen **Planzeiten**
> gespeichert. Abgeschlossene Arbeitstage werden bei der Erstellung der Vorlage
> ignoriert.

{% figure caption="Vergessen Sie nicht, Ihrer Vorlage einen Namen zu geben!" %}
<img src= "vorlage_erstellen.webp" />
{% endfigure %}

### Vorlage Anwenden

Um eine Vorlage in der aktuellen Woche anzuwenden, wählen Sie diese einfach aus
Ihrer Vorlagen-Liste mit einem Klick aus. Klicken Sie anschließend auf **Anwenden**, um den Vorgang
abzuschließen.

### Vorlage Löschen

Um eine Vorlage zu löschen, öffnen Sie zunächst die Vorlagen-Liste. Fahren Sie
dann mit der Maus über die gewünschte Vorlage und klicken Sie den {% icon
"trash" %}-**Icon**. Klicken Sie **Entfernen** im darauffolgenden
Bestätigungsdialog, um den Vorgang abzuschließen.

## Dienstplan Leeren

Um den gesamten Dienstplan zu leeren, klicken Sie das
{% icon "wrench" %}-**Icon** in der oberen rechten Ecke des Dienstplanmenüs. Sie
können nun das Feld {% button icon="trash", label="Dienstplan Leeren" %}
auswählen. Sie können entscheiden entweder ausschließlich geplante oder auch
abgeschlossene Schichten zu löschen. **Mit einem Klick auf 'Dienstplan Leeren'
ist dieser unwiderruflich gelöscht!**

> **Beachten Sie:** Es werden nur Schichten gelöscht, die den
> [Filterkriterien](#filtern--suchen) des aktuellen Tabs entsprechen.

## Planungshilfen

Das Schreiben eines "fehlerfreien" Dienstplans ist keine einfache Angelegenheit.
Nicht nur müssen Sie die Verfügbarkeit, Sollstunden und Urlaubstage Ihrer
Mitarbeiter im Auge behalten, auch die gesetzlichen Vorlagen in Ihrer
fürchterlichen Vielfalt dürfen nicht verletzt werden. **Pentacode steht Ihnen
deshalb mit einer Vielzahl von intelligenten Planungshilfen zur Seite!**

> {% icon "lightbulb" %} **Wichtig:** Die Planungshilfen können Sie mit einem Klick
> auf das {% icon "tv-retro" %}  **Icon** im rechten oberen Eck aktivieren und deaktivieren.

### Problemberichte

Pentacode prüft jede Ihrer Eingaben automatisch auf Fristverletzungen,
Schichtüberlappungen oder andere Probleme. Diese werden Ihnen unmittelbar im
Dienstplan-Menü bei dem roten {% icon "exclamation-triangle" %} Symbol
angezeigt. Ein Klick auf das Icon öffnet eine Liste aller Probleme im aktuellen
Dienstplan. Dort können Sie direkt den betroffenen Eintrag auswählen, um das
Problem zu beheben.
Zusätzlich können Sie eine Auflistung aller Problemberichte unter dem Reiter
[Probleme](hilfe/handbuch/probleme) einsehen.

{% figure caption="Pentacode hilft Ihnen Probleme bei der Dienstplanung zu erkennen und zu beheben." %}

<img src="problem.gif" />

{% endfigure %}

### Schichten Spiegeln

Bei Mitarbeitern, die in mehreren Abteilungen eingesetzt werden, kann es
hilfreich sein, in einer Abteilung Einträge von anderen Abteilungen zu
"spiegeln". So sehen Sie immer, wenn ein Mitarbeiter **bereits in einer anderen
Abteilung eingeteilt ist** und können dies in Ihrer Planung berücksichtigen. Die
"Schichten Spiegeln"-Funktion kann über das {% icon "tv-retro" %} **Icon**
aktiviert und deaktiviert werden.

### Verfügbarkeiten anzeigen

Um die Wüsche ihrer Mitarbeiter bei der Erarbeitung eines Dienstplans zu
berücksichtigen, können Sie sich die Verfügbarkeitsangaben einblenden lassen.
Wählen Sie dazu "**Verfügbarkeiten**" in den [Planungshilfen](#planungshilfen)
an. Nun werden Ihnen die verschiedenen
Verfügbarkeiten ihrer Mitarbeiter farblich hinterlegt. Die Verfügbarkeiten sind
dabei lediglich zur Orientierung gedacht, **sie beeinflussen ihre Schichtplanung
nicht**.

{% figure caption="Klicken Sie auf das icon, um sich die Verfügbarkeiten der Mitarbeiter farblich hinterlegen zu lassen." %}

<img src="verfügbarkeiten.webp" />

{% endfigure %}

### Wochenstunden

Über die "Fortschrittsanzeige" unter den Namen der Mitarbeiter, sehen Sie auf
einen Blick, wie viele Stunden einem Mitarbeiter noch fehlen, um auf die
Sollstunden für diese Woche zu kommen. Diese Anzeige aktualisiert sich automatisch, wenn Sie
Änderungen an den Dienstplanzeiten des Mitarbeiters vornehmen.

### Monatsstunden

Analog zu der [Wochenstunden-Anzeige](#wochenstunden) gibt es außerdem eine
"Fortschrittsanzeige" für die Ist- und Sollstunden eines Mitarbeiters im
aktuellen Monat. Diese finden Sie in der [Tagesansicht](#tagesansicht) für den
aktuell selektierten Mitarbeiter. Dort werden Ihnen auch die restlichen
Urlaubstage des Mitarbeiters angezeigt. 

### Stundenvorgaben

Sie möchten mehr Kontrolle darüber, wie viele Stunden von jeder Abteilung
täglich aufgewendet werden? Über die Stundenvorgabe können Sie genau
definieren, wie viele Stunden von jeder Abteilung an einem bestimmten Tag
insgesamt in Anspruch genommen werden sollen. Diese
**Stundenvorgaben** werden Ihnen dann
direkt im Dienstplan in Form von "Fortschrittsbalken" angezeigt. Diese
Stundenvorgaben-Leisten können Sie in den [Planungshilfen](#planungshilfen)
unter **'Stundenvorgaben'** an- und abwählen. 

Mehr Informationen über das Planen nach Stundenvorgaben erfahren Sie
[hier]\(/handbuch/planung/stundenvorgaben/).

## Überstunden Vorher/Nachher

Um die Arbeitszeitkonten ihrer Mitarbeiter bei der Dienstplanung stets im Blick
zu haben, hilft Ihnen die {% button icon="plus-minus", label="Überst.
Vorher/Nachher" %} Funktion in den [Planungshilfen](#planungshilfen). Wenn diese Funktion
angewählt ist, sehen Sie auf der linken Seite des Dienstplans eine Zahl, welche
die Über- oder Minderstunden des Mitarbeiters zu Beginn der Dienstwoche angibt.
Die Zahl auf der rechten Seite des Dienstplans gibt an, wie viele Über- oder
Minderstunden der Mitarbeiter nach Durchführung der geplanten Dienste haben
wird. 

> Grün hinterlegte, positive Zahlen sind Überstunden, während rot hinterlegte,
> negativ Zahlen Minderstunden anzeigen. 

### Kompakte Darstellung

Über das {% icon "grid-3" %} **Symbol** in den [Planungshilfen](#planungshilfen) können Sie den Dienstplan
von der regulären in eine kompaktere Darstellungsform bringen. Die kompakte Form
erlaubt es Ihnen auf einen Blick noch mehr Schichten einzusehen, indem einige
Informationen, wie die Wochenstunden, ausgeblendet werden. Besonders für
routinierte Anwender und die **erste Grobarbeit an neuen Plänen** eignet sich
die kompakte Darstellung.

Mit einem Klick auf das {% icon "grid-4" %} **Symbol** können Sie sich den
Dienstplan noch minimaler darstellen lassen. Nun werden auch die Dauer der
Schichten ausgeblendet und Sie können besonders einfach sehen, welcher
Mitarbeiter in welcher Abteilung wann eingeteilt ist. 

{% figure caption="Lassen Sie sich mit kompakter und minimaler Darstellung nur die Informationen anzeigen, die Sie brauchen." %}

<img src="kompakte_darstellung.gif" />

{% endfigure %}

### Personalkostenanalyse

Für eine effiziente Personalplanung ist es essenziell, immer einen Überblick
über die entstehenden Personalkosten zu haben. Über den {% icon
"chart-line" %}-**Button** in den [Planungshilfen](#planungshilfen) erhalten Sie nicht nur eine direkte
Auskunft darüber, wie hoch der Kostenaufwand für einen bestimmten Tag ist, Sie
können bei vergangenen Tagen sogar die geplanten Kosten mit den tatsächlich
entstandenen vergleichen!

## Plan-Ist-Vergleich

Oft verliert eine Planung ihre Bedeutung, sobald sie beendet ist. Dabei macht
ein Plan erst dann seinen wahren Wert erkennbar, wenn er an der Wirklichkeit
überprüft wird. Im Falle der Dienstplanung lässt sich dies durch eine einfache
Frage beantworten: Haben die Mitarbeiter die durch den Plan gesetzten Vorgaben
eingehalten?

Durch das Anklicken des {% icon "chart-line" %}-**Symbols** erscheinen am Fuß
des Dienstplans **zwei Linien** über welche die **Personalkosten** aus der
**Planung** den Kosten durch die tatsächlich aufgewendeten **Arbeitszeiten**
gegenübergestellt sind. Die Kosten beinhalten die **Arbeitgeberanteile** zur
Sozialversicherung.

**Die Kosten werden immer nur für die im [Filter des Tabs](#filtern--suchen)
ausgewählten Abteilungen angezeigt!**

> {% icon "lightbulb" %} **Tipp:** Sollten sich die **Felder** mit Angabe der
> €-Beträge **überlappen**, werden die jeweiligen Beträge durch "**Mouse-over**" sichtbar.

{% figure caption="Der Plan-Ist-Vergleich hilft zu überprüfen, ob die Dienstplanung auch eingehalten wird." %}

<img src= "plan_vergleich.gif" />

{% endfigure %}

Durch **erneutes Anklicken** des {% icon "chart-line" %}-**Symbols** wird die
Plan-Ist-Anzeige wieder **ausgeblendet**.

Die Unterscheidung zwischen geplanten und tatsächlich entstandenen Kosten setzt
die Arbeitszeiterfassung durch die Stempeluhr voraus.

**Hinweis**: Wenn an einem Tag Arbeiten zu leisten sind, die nicht mit dem
aktuellen Tagesgeschäft in Zusammenhang stehen (z.B. vorbereitende Arbeiten in
der Küche für eine Veranstaltung, die erst in zwei Tagen stattfindet), setzen Sie
in [**Planung nach Stundenvorgaben**]\(/handbuch/planung/stundenvorgaben/)
idealerweise das Stundenkontingent für diesen Tag entsprechend nach oben.

Im Menüpunkt "[**Berichte**]\(/handbuch/berichte/)" erhalten Sie u.a. auch
hierzu Informationen in Form einer monatlichen Zusammenfassung.
