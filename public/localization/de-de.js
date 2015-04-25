/*
 * PencilBlue 0.3.0 localisation file for German.
 * Version:     1.3
 * Author:      Jörg Hedtmann
 * Change Log:
 *              28/11/2014 Initial version
 *              02/12/2014 Added comments on how to handle
 *                         differences in English/German syntax.
 *              03/12/2014 Changed file's global.localizationLanguage to 'de-de'.
 *                         Haven't yet inquired on how this is handled in the
 *                         localisation module.
 *              04/12/2014 Fixed untranslated navigation items and stray characters
 *                         at end of file as well as some translations that I, at second view
 *                         disliked;-).
 */
var loc = {
    generic:{
        PENCILBLUE: 'pencilblue',
        ALL_RIGHTS: 'All rights reserved',
        NONE: 'keine',
        LEFT: 'linksbündig',
        CENTER: 'zentriert',
        RIGHT: 'rechtsbündig',
        YES: 'Ja',
        NO: 'Nein',
        NEW: 'Neu',
        LOGIN: 'Anmelden',
        LOGOUT: 'Abmelden',
        SIGN_UP: 'Registrieren',
        NAME: 'Name',
        USERNAME: 'Benutzername',
        PASSWORD: 'Passwort',
        DATE: 'Datum',
        HOME: 'Home',
        BACK_HOME: 'Zurück zur Homepage',
        WRITER: 'Autor',
        READER: 'Leser',
        EDITOR: 'Redakteur',
        MANAGING_EDITOR: 'Chefredakteur',
        ADMINISTRATOR: 'Administrator',
        COLUMN_INCHES: 'Spalten in Zoll',
        CONTENT: 'Inhalt',
        META_DATA: 'Metadaten',
        SEO: 'SEO',
        FORM_INCOMPLETE: 'Die Eingaben sind nicht vollständig.',
        INVALID_UID: 'Es wurde eine ungültige UID angegeben.',
        ERROR_SAVING: 'Fehler beim Speichern',
        ERROR_DELETING: 'Fehler beim Löschen',
        INSUFFICIENT_CREDENTIALS: 'Sie sind nicht dazu berechtigt, diese Aktion auszuführen.',
        SAVE: 'Speichern',
        SAVE_DRAFT: 'Entwurf speichern',
        DRAFT_SAVED: 'Entwurd gespeichert',
        LAST_SAVED: 'Zuletzt gespeichert',
        PREVIEW: 'Vorschau',
        CANCEL: 'Abbruch',
        EDIT: 'Bearbeiten',
        DELETE: 'Löschen',
        SUBMIT: 'Senden',
        SELECT: 'Auswählen',
        MANAGE: 'Verwalten',
        SORT: 'Sortieren',
        NOW: 'Jetzt',
        CONFIRM_DELETE: 'Sind Sie sicher, dass Sie das Objekt löschen wollen:',
        LOAD_FILE: 'Datei laden',
        SELECT_FILE: 'Datei auswählen',
        NO_ARTICLES: 'Kein Beitrag entspricht den Suchkriterien.',
        ACCOUNT: 'Konto',
        EMAIL: 'E-Mail',
        PREFERENCES: 'Einstellungen',
        COMMENT: 'Kommentar',
        COMMENTS: 'Kommentare',
        SUBMIT_COMMENT: 'Kommentieren',
        LOGIN_TO_COMMENT: 'Anmelden, um einen Kommentar zu verfassen.',
        COMMENT_SUBMITTED: 'Ihr Kommentar wurde gespeichert.',
        COMMENT_ERROR: 'Es gab einen Fehler beim Speichern Ihres Kommentars.',
        DATE_ADDED: 'Erstellungsdatum',
        LAST_MODIFIED: 'Letzte Änderung',
        CHECK: 'Prüfen',
        AVAILABLE: 'Verfügbar',
        UNAVAILABLE: 'Nicht verfügbar',
		INSTALLED_ON: 'Installiert auf',
		VERSION: 'Version',
		ACTIVE_PLUGINS: 'Aktive Plugins',
		INACTIVE_PLUGINS: 'Nicht-aktive Plugins',
		AVAILABLE_PLUGINS: 'Verfügbare Plugins',
		RESET_SETTINGS: 'Einstellungen zurücksetzen',
		UNINSTALL: 'Deinstallieren',
		INSTALL: 'Installieren',
		ACTIVE_PLUGIN_DESCRIPTION: 'Plugins, die schon installiert sind und erfolgreich mit dem System gestartet wurden.',
		INACTIVE_PLUGIN_DESCRIPTION: 'Plugins, die ganz oder teilweise installiert wurden, aber nicht mit dem System gestartet werden konnten.',
		AVAILABLE_PLUGIN_DESCRIPTION: 'Plugins, die zum Download bereitstehen und installiert werden können.',
		PLEASE_WAIT: 'Bitte warten',
		VALID_ACTION_REQUIRED: 'Es ist eine gültige Aktion erforderlich.',
		VALID_IDENTIFIER_REQUIRED: 'Eine gültige ID muss vergeben werden.',
		INSTALL_FAILED: 'Der Versuch, das Plugin [%s] zu installieren, schlug fehl.',
		INSTALL_SUCCESS: 'Das Plugin [%s] wurde erfolgreich installiert.',
		UNINSTALL_FAILED: 'Das Plugin [%s] konnte nicht installiert werden.',
		UNINSTALL_SUCCESS: 'Das Plugin [%s] wurde erfolgreich de-installiert.',
		PLUGIN_NOT_FOUND: 'Das Plugin [%s] konnte nicht gefunden werden.',
		RESET_SETTINGS_FAILED: 'Der Versuch, die Einstellungen für das Plugin [%s] zurückzusetzen, schlug fehl.',
		RESET_SETTINGS_SUCCESS: 'Die Einstellungen für das Plugin [%s] wurden erfolgreich zurückgesetzt.',
		INITIALIZE: 'Initialisierung',
		INITIALIZATION_FAILED: 'Der Versuch, das Plugin [%s] zu initialisieren, schlug fehl.',
		INITIALIZATION_SUCCESS: 'Das Plugin [%s] wurde erfolgreich initialisiert.',
		PERMISSION: 'Berechtigung',
		PERMISSIONS: 'Berechtigungen',
		ACCESS_USER: 'Benutzer',
		ACCESS_WRITER: 'Autor',
		ACCESS_EDITOR: 'Redakteur',
		ACCESS_MANAGING_EDITOR: 'Chefredakteur',
		ACCESS_ADMINISTRATOR: 'Administrator',
		UID: 'UID',
		AUTHOR_INFORMATION: 'Autor-Informationen',
		WEBSITE: 'Webseite',
		CONTRIBUTORS: 'Co-Autoren',
		ERRORS: 'Fehler',
		ERRORED: 'Fehler',
		ACTIVE: 'Aktiv',
		INACTIVE: 'Nicht aktiv',
		STATUS: 'Status',
		THEME_INFORMATION: 'Themendetails',
		TEMPLATES: 'Vorlagen',
		SET_THEME_FAILED: 'Fehler beim Aktivieren des Themas [%s].',
		SET_THEME_SUCCESS: 'Thema erfolgreich aktiviert [%s].',
		SAVE_PLUGIN_SETTINGS_SUCCESS: 'Einstellungen erfolgreich gespeichert.',
		SAVE_PUGIN_SETTINGS_FAILURE: 'Fehler beim Speichern der Einstellungen.',
		SET_THEME: 'Thema anwenden',
		SITE_LOGO_UPLOAD_FAILURE: 'Fehler beim Aktualisieren des Webseiten-Logos.',
		SITE_LOGO_UPLOAD_SUCCESS: 'Das Webseiten-Logo wurde erfolgreich aktualisiert.',
		TYPE: 'Typ',
		CONTAINER: 'Container',
		SECTION: 'Sektion',
		ARTICLE: 'Beitrag',
		PAGE: 'Seite',
		URL: 'URL',
		LINK: 'Link',
		CONTENT_SEARCH_EXPLANATION: 'Einen Artikel oder eine Seite nach Titel oder Untertitel durchsuchen.',
		PARENT_NAV_ITEM: 'Übergeordnetes Navigationselement',
		NAVIGATION: 'Navigation',
		NAV_MAP: 'Navigationsübersicht',
        NEW_NAV_ITEM: 'Neues Navigationselement',
        EDIT_NAVIGATION: 'Navigationsbaum bearbeiten',
        DESCRIPTION: 'Beschreibung',
        NAV_MAP_SAVED: 'Die Navigationsübersicht wurde erfolgreich gespeichert',
        SECTIONS: 'Sektionen',
		SERVER: 'Server',
		PROCESS_TYPE: 'Prozesstyp',
		UPTIME: 'Laufzeit',
		MEMORY_USED: 'Speicherauslastung',
		SECONDS_ABBR: 'Sek.',
		NO_AVAILABLE_PLUGINS: 'Es stehen keine Plugins zur Verfügung.',
        READ_MORE: 'Weiterlesen',
        READ_FULL: 'Die komplette Story lesen',
        THEME_DEFAULT: 'Standardthema',
        USER: 'Benutzer',
        SUBSCRIBE: 'Abonnieren',
        PRIVACY_POLICY: 'Datenschutzrichtlinie',
        MAKE_PB_BETTER: 'Helfen Sie PencilBlue, indem Sie uns Ihre Erfahrungen mit dem System mitteilen.',
        CLOSE: 'Schließen',
        APPLY_SETTINGS: 'Einstellungen anwenden',
        CONFIGURATION_SETTINGS: 'Konfigurationseinstellungen',
        EXISTING_CUSTOM_OBJECT: 'Ein Objekt mit diesem Namen existiert bereits.',
        OPTIONS_PARAM_MUST_BE_OBJECT: 'Der Parameter "options" muss ein gültiges Objekt sein.',
        WHERE_CLAUSE_MUST_BE_OBJECT: 'Der Parameter "where" muss ein gültiges Objekt sein.',
        COLLECTION_MUST_BE_STR: 'Der Parameter "collection" muss ein gültiger String sein.',
        COMMAND_MUST_BE_OBJECT: 'Der Befehl muss ein gültiges Objekt sein.',
        PROCEDURE_MUST_BE_OBJECT: 'Der Parameter "procedure" muss ein gültiges Objekt sein, um die Indizierung durchzuführen.',
        OBJ_TO_PARAMS_MUST_BE: 'Der "obj" Parameter muss ein Objekt, und der "to" Parameter ein String sein.',
        EMAIL_NOT_CONFIGURED: 'E-Mail wurde für diesen Server nicht konfiguriert.',
        INVALID_URL: 'Die übergebene URL ist ungültig.',
        INVALID_MEDIA_URL: 'Die URL des Mediums enthält nicht die nötigen Informationen für den Import.',
        UNSUPPORTED_MEDIA: 'Der übergebene Medientyp wird nicht unterstützt.',
        OBJECT_NOT_FOUND: 'Das gesuchte Objekt wurde im System nicht gefunden.',
        REQUIRED_FIELD: 'Dieses Feld muss ausgefüllt werden.',
        INVALID_FILE: 'Es wurde eine ungültige Datei angegeben.',
        COMPLETE: 'Fertig',
        WYSIWYG: 'WYSIWYG',
        THUMBNAIL: 'Thumbnail'
    },
    error:
    {
    	ERROR: 'Fehler',
        PAGE_NOT_FOUND: 'Die Seite wurde nicht gefunden.'
    },
    timestamp:
    {
        JAN: 'Januar',
        FEB: 'Februar',
        MAR: 'März',
        APR: 'April',
        MAY: 'Mai',
        JUN: 'Juni',
        JUL: 'Juli',
        AUG: 'August',
        SEP: 'September',
        OCT: 'Oktober',
        NOV: 'November',
        DEC: 'Dezember',
        TIME_AM: 'AM',
        TIME_PM: 'PM'
    },
    setup:
    {
        REGISTER_ADMIN: 'Bitte das erste admin Konto für die Site anlegen.'
    },
    login:
    {
        ADMIN_LOGIN: 'Autoren, Redakteure und Administratoren Anmeldung.',
        USERNAME_OR_EMAIL: 'Benutzername oder E-Mail Adresse.',
        INVALID_LOGIN: 'Diese Kombination von Benutzername und Passwort ist ungültig.',
        READY_TO_USE: 'Ihre pencilblue Installation kann nun benutzt werden.',
        ACCOUNT_CREATED: 'Ihr Konto wurde erfolgreich angelegt; Sie können sich nun anmelden.'
    },
    admin:
    {
        DASHBOARD: 'Dashboard',
        CONTENT: 'Inhalte',
        PAGES: 'Seiten',
        ARTICLES: 'Beiträge',
        TOPICS: 'Kategorien',
        MEDIA: 'Medien',
        CUSTOM_OBJECTS: 'Benutzer-definierte Objekte',
        PLUGINS: 'Plugins',
        THEMES: 'Themen',
        LAYOUT: 'Layout',
        FRONTEND: 'Frontend Plugins',
        BACKEND: 'Backend Plugins',
        INSTALL_PLUGIN: 'Ein Plugin installieren',
        USERS: 'Benutzer',
        SETTINGS: 'Einstellungen',
        VIEW_SITE: 'Webseite ansehen',
        SITE_SETTINGS: 'Webseiten-Einstellungen',
        SITE_LOGO: 'Webseiten Logo',
        AUTHOR: 'Autor',
        ACCOUNT: 'Konto',
        CUSTOM_VARIABLES: 'Benutzer-definierte Variablen',
        CUSTOM_VARIABLE_KEY: 'Eindeutiger Variablenname',
        CUSTOM_VARIABLE_VALUE: 'Der Wert der Variablen',
        ACTIVE_TOPICS: 'Assoziierte Kategorien hierhin ziehen',
        INACTIVE_TOPICS: 'Assoziation einer Kategorie aufheben',
        FOCUS_KEYWORD: 'Fokus Schlüsselwort',
        FOCUS_KEYWORD_PLACEHOLDER: 'The&nbsp;top&nbsp;keyword&nbsp;associated&nbsp;with&nbsp;the&nbsp;content',
        SEO_TITLE: 'SEO Titel',
        SEO_TITLE_PLACEHOLDER: 'Begrenzt$nbsp;auf&nbsp;70&nbsp;Zeichen.',
        META_DESC: 'Metabeschreibung',
        META_DESC_PLACEHOLDER: 'Begrenzt$nbsp;auf&nbsp;156&nbsp;Zeichen.',
        META_KEYWORDS: 'Meta Schlüsselwörter',
        META_KEYWORDS_PLACEHOLDER: 'Komma-separierte&nbsp;Schlüsselworte.',
        CREATED: 'wurde erstellt',
        ADDED: 'wurde hinzugefügt',
        EDITED: 'wurde bearbeitet',
        DELETED: 'würde gelöscht',
        SAVED: 'wurde gespeichert',
        NARROW_RESULTS: 'Resultate eingrenzen',
        URL_KEY: 'URL-Schlüssel',
        FEED_UNAVAILABLE: 'Kann den Nachrichten-Feed nicht laden.'
    },
    topics:
    {
        MANAGE_TOPICS: 'Kategorien verwalten',
        NEW_TOPIC: 'Neue Kategorie',
        TOPIC_NAME: 'Name der Kategorie',
        EXISTING_TOPIC: 'Ein Kategorie mit diesem Namen existiert bereits.',
        TOPICS_CREATED: 'Die Kategorie wurde erfolgreich angelegt.',
        IMPORT_TOPICS: 'Kategorien importieren',
        IMPORT_TOPICS_HELP: 'Hier kann man eine CSV-Datei mit Kategorien nach PencilBlue importieren. Die Datei sollte sonst keine Informationen enthalten.',
        TOPICS_CSV_FILE: 'CSV-Datei mit Kategorien'
    },
    media:
    {
        MANAGE_MEDIA: 'Medien verwalten',
        NEW_MEDIA: 'Neues Medium',
        LINK_OR_UPLOAD: 'Linken oder hochladen',
        LINK_TO_MEDIA: 'Link zum Medium',
        UPLOAD_MEDIA: 'Medium hochladen',
        MEDIA_URL: 'Medien URL',
        MEDIA_URL_PLACEHOLDER: 'image, YouTube, Vimeo, oder Dailymotion Link',
        LOAD_LINK: 'Link laden',
        UPLOAD: 'UPLOAD',
        MEDIA_NAME: 'Medienname',
        CAPTION: 'Legende',
        RELATED_MEDIA: 'Ziehen Sie Medien, die mit diesem Beitrag verbunden sind, hier hin.',
        UNRELATED_MEDIA: 'Entfernen Sie verbundene Medien, indem Sie sie hierhin ziehen.',
        MEDIA_FORMATTING: 'Formatierung der Medien',
        MAXIMUM_HEIGHT: 'Maximale Höhe',
        LINK_TO_IMAGE: 'Link zum Bild',
        UPLOAD_IMAGE: 'Bild hochladen',
        IMAGE_URL: 'URL des Bildes',
        IMAGE_URL_PLACEHOLDER: '.jpg, .png, .gif, or .svg',
        FILE_TOO_BIG: 'Die Datei größer ist als die zulässige Grenze ist'
    },
    pages:
    {
        MANAGE_PAGES: 'Seiten verwalten',
        NEW_PAGE: 'Neue Seite',
        PAGE_URL: 'URL der Seite',
        CUSTOM_URL: 'Benutzer-definierte URL',
        TEMPLATE: 'Vorlage',
        HEADLINE: 'Titel',
        SUBHEADING: 'Untertitel',
        PUBLISH_DATE: 'Datum der Veröffentlichung'
    },
    articles:
    {
        MANAGE_ARTICLES: 'Beiträge verwalten',
        NEW_ARTICLE: 'Neuer Beitrag',
        ARTICLE_URL: 'URL des Beitrags',
        CUSTOM_URL: 'Benutzer-definierte URL',
        STANDALONE_TEMPLATE: 'Eigenständige Vorlage',
        HEADLINE: 'Titel',
        SUBHEADING: 'Untertitel',
        PUBLISH_DATE: 'Datum der Veröffentlichung',
        ACTIVE_SECTIONS: 'Ziehen Sie Sektionen, die mit diesem Beitrag zu tun haben, hier hin.',
        INACTIVE_SECTIONS: 'Entfernen Sie Sektionen, indem Sie sie hierhin ziehen.',
        PUBLISHED: 'Veröffentlicht',
        UNPUBLISHED: 'Unveröffentlicht',
        DRAFT: 'Entwurf',
        INSERT_READ_MORE: 'Legen Sie eine Pause mehr lesen'
    },
    wysiwyg: {
        NORMAL_TEXT: 'Normaler Text',
        QUOTE: 'Zitat',
        HEADING_1: 'Überschrift 1',
        HEADING_2: 'Überschrift 2',
        HEADING_3: 'Überschrift 3',
        HEADING_4: 'Überschrift 4',
        HEADING_5: 'Überschrift 5',
        HEADING_6: 'Überschrift 6',
        ADD_LINK: 'Einen Link hinzufügen',
        LINK_URL: 'Link URL',
        LINK_TEXT: 'Link Text',
        LINK_IN_TAB: 'Link in neuem Tab/neuem Fenster öffnen.',
        TEST_LINK: 'Link prüfen',
        INSERT_LINK: 'Link einfügen',
        ADD_MEDIA: 'Medium hinzufügen',
        INSERT_MEDIA: 'Medium einfügen',
        SELECT_MEDIA: 'Einzufügendes Medium auswählen',
        ASSOCIATE_MEDIA: 'Verbindung des Mediums zum Beitrag herstellen.',
        BOLD: 'Fett',
        ITALIC: 'Kursiv',
        UNDERLINE: 'Unterstrichen',
        STRIKETHROUGH: 'Durchgestrichen',
        CLEAR_STYLES: 'Alle Stilinformationen entfernen.',
        ALIGN_LEFT: 'Linksbündig',
        ALIGN_CENTER: 'Zentriert',
        ALIGN_RIGHT: 'Rechtsbündig',
        JUSTIFY: 'Blocksatz',
        ORDERED_LIST: 'Sortierte Liste (OL)',
        UNORDERED_LIST: 'Unsortierte Liste (UL)',
        INSERT_OBJECT: 'Objekt einfügen',
        WYSIWYG_VIEW: 'WYSIWYG-Ansicht',
        HTML_VIEW: 'HTML-Ansicht',
        MARKDOWN_VIEW: 'Markdown-Ansicht',
        TOGGLE_FULLSCREEN: 'Gesamten Bildschirm nutzen'
    },
    comments:
    {
        MANAGE_COMMENTS: 'Kommentare verwalten',

        /*
        Since the syntax of a sentence in German differs from English
        the following cannot just be concatenated as in English,
        but rather must be interpolated to include the commentator
        at the proper place within the sentence.
        */
        CONFIRM_DELETE_COMMENT: 'Sind Sie sicher, das Sie den Kommentar von [%USERNAME] löschen möchten?',
        COMMENTS_DISABLED: 'Die Kommentarfunktion ist nicht aktiviert.',
        ENABLE_HERE: 'Aktivieren Sie sie hier'
    },
    custom_objects:
    {
        MANAGE_OBJECT_TYPES: 'Benutzer-definierte Objekttypen verwalten',
        NEW_OBJECT_TYPE: 'Neuer Benutzer-definierter Objekttyp',
        MANAGE_OBJECTS: 'Benutzer-definierte Objekte verwalten',
        NEW_OBJECT: 'Neues Benutzer-definiertes Objekt',
        SORT_SAVED: 'Sortierung wurde gespeichert',
        FIELDS: 'Felder',
        ADD_FIELD: 'Feld hinzufügen',
        VALUE: 'Wert',
        TEXT: 'Text',
        BOOLEAN: 'Boolean',
        NUMBER: 'Zahlenwert',
        PEER_OBJECT: 'Gleichrangiges Objekt',
        CHILD_OBJECTS: 'Kind-Objekt',
        OBJECT_TYPE: 'Objekttyp',
        FIELD_TYPES: 'Feldtypen',
        ACTIVE_OBJECTS: 'Ziehen Sie Objekte, die mit diesem Beitrag verbunden sind, hier hin.',
        INACTIVE_OBJECTS: 'Entfernen Sie verbundene Objekte, indem Sie sie hierhin ziehen.',
        OBJECTS: 'Objekte',
        OBJECT: 'Objekt',
        DESCRIPTION: 'Beschreibung',
        INVALID_FIELD: 'Es wurde versucht, ein ungültiges Feld hinzuzufügen. Stellen Sie sicher, dass der Feldname eindeutig ist und keine unselektierten Feldtypen vorhanden sind.'
    },
    users:
    {
        MANAGE_USERS: 'Benutzer verwalten',
        UNVERIFIED_USERS: 'Nicht-verifizierte Benutzer',
        NEW_USER: 'Neuer Benutzer',
        ACCOUNT_INFO: 'Kontoinformationen',
        PERSONAL_INFO: 'Persönliche Angaben',
        USERNAME: 'Benutzername',
        USER_PHOTO: 'Bild des Benutzers',
        FIRST_NAME: 'Vorname',
        LAST_NAME: 'Nachname',
        POSITION: 'Position',
        EMAIL: 'E-Mail',
        PASSWORD: 'Passwort',
        CHANGE_PASSWORD: 'Passwort ändern',
        RESET_PASSWORD: 'Passwortzurücksetzen',
        CURRENT_PASSWORD: 'Aktuelles Passwort',
        CONFIRM_PASSWORD: 'Passwort bestätigen',
        GENERATE: 'Generieren',
        USER_TYPE: 'Benutzertyp',
        CREATE_USER: 'Benutzer anlegen',
        USER_DELETE_SELF: 'Benutzer können ihr eigenes Konto nicht löschen.',
        PASSWORD_MISMATCH: 'Passwörter stimmen nicht überein.',
        EXISTING_USERNAME: 'Dieser Benutzername ist schon registriert.',
        EXISTING_EMAIL: 'Diese E-Mail Adresse ist schon registriert.',
        USER_CREATED: 'Der Benutzer wurde erfolgreich angelegt.',
        USER_EDITED: 'Die Benutzerangaben wurden erfolgreich bearbeitet.',
        CREATE_ACCOUNT: 'Benutzerkonto anlegen',
        LOGIN_EXISTING: 'Anmelden mit bestehendem Benutzer',

        /*
        Since the syntax of a sentence in German differs from English
        the following cannot just be concatenated as in English,
        but rather must be interpolated to include the e-mail
        at the proper place within the sentence.
        */
        VERIFICATION_SENT: 'Es wurde eine Bestätigungs-E-Mail an [%USERNAME_OR_EMAIL] versandt.',
        YOUR_VERIFICATION: 'Es wurde eine Bestätigungs-E-Mail an [%EMAIL] versandt.',
        YOUR_PASSWORD_RESET: 'Eine E-Mail zum Zurücksetzen Ihres Passworts wurde versandt.',
        CHECK_INBOX: 'Bitte sehen Sie in Ihrer "Inbox" nach und klicken Sie den Link in der E-Mail.',
        RESEND_VERIFICATION: 'Bestätigungs E-Mail erneut senden.',
        USER_VERIFIED: 'Diese E-Mail Adresse würde schon bestätigt.',
        NOT_REGISTERED: 'Dieser Benutzername, bzw. diese E-Mail Adresse sind nicht registriert.',
        INVALID_VERIFICATION: 'Die Bestätigungsangaben sind ungültig. Bitte geben Sie Ihre E-Mail Adresse erneut ein.',
        EMAIL_VERIFIED: 'Danke für die Bestätigung Ihrer E-Mail Adresse. Sie können sich nun anmelden.',
        MANAGE_ACCOUNT: 'Benutzerkonto verwalten',
        PROFILE: 'Profile',
        PROFILE_EDITED: 'Ihr Profile wurde erfolgreich bearbeitet.',
        OLD_PASSWORD: 'Bisheriges Passwort',
        NEW_PASSWORD: 'Neues Passwort',
        INVALID_PASSWORD: 'Bisheriges Passwort ist ungültig.',
        PASSWORD_CHANGED: 'Ihr Passwort wurde erfolgreich geändert.',
        NO_PERMISSIONS: 'Keines Ihrer installierten Plugins haben Berechtigungen konfiguriert.',
        CONFIRM_VERIFY: 'Sind Sie sicher, dass Siebestätigen wollen?',
        VERIFY: 'Bestätigen',
        VERIFIED: 'wurde bestätigt'
    },
    plugins:
    {
        MANAGE_PLUGINS: 'Plugins verwalten',
        NO_ACTIVE_PLUGINS: 'Keine aktivierten Plugins',
        NO_INACTIVE_PLUGINS: 'Keine deaktivierten Plugins',
        ABOUT: 'Über',
        INSTALLING: 'Installiert',
        UNINSTALLING: 'Deinstalliert',
        RESETTING: 'Wird zurückgesetzt',
        INITIALIZING: 'Initialisiert',
        ACTIVATING: 'Aktiviert',
        ACTION_ERROR: 'Beim Abschließen der Aktion ist ein Fehler aufgetreten.'
    },
    themes:
    {
        MANAGE_THEMES: 'Themen verwalten'
    },
    site_settings:
    {
        CONFIGURATION: 'Konfiguration',
        EDIT_CONFIGURATION: 'Um die Konfiguration zu bearbeiten, müssen die die Datei "config.json" im Root-Verzeichnis anlegen.',
        SITE_NAME: 'Name der Site',
        SITE_ROOT: 'Root-Verzeichnis der Site',
        DOCUMENT_ROOT: 'Basisverzeichnis für Dokumente',
        IP_ADDRESS: 'IP Adresse',
        PORT: 'Port',
        DB_TYPE: 'Datenbanktyp',
        DB_NAME: 'Datenbankname',
        DB_SERVERS: 'Datenbank Server',
        CONTENT_SETTINGS: 'Einstellungen für Inhalte',
        LIBRARIES: 'Bibliotheken',
        LIBRARY_SETTINGS: 'Einstellungen für Bibliotheken',
        LIBRARY_CLUSTER: 'Falls Sie PencilBlue auf einem Server Cluster betreiben, ist ein Re-Start notwendig, um alle Änderungen zu übernehmen.',
        ARTICLES_PER_PAGE: 'Beiträge pro Seite',
        AUTO_BREAK_ARTICLES: 'Artikel nach # Paragrafen automatisch umbrechen.',
        READ_MORE_TEXT: 'Lesen Sie mehr',
        DONT_BREAK: 'Nicht umbrechen',
        TIMESTAMP: 'Zeitstempel',
        DISPLAY_TIMESTAMP: 'Zeitstempel in Beiträgen anzeigen',
        DATE_FORMAT: 'Datumsformat',
        TWO_DIGIT_DATE: 'Monate und Tage immer zweistellig anzeigen',
        DISPLAY_HOURS_MINUTES: 'Stunden und Minuten anzeigen',
        TIME_FORMAT: 'Zeitformat',
        TWO_DIGIT_TIME: 'Stunden immer zweistellig anzeigen',
        AUTHORS: 'AUTOREN',
        DISPLAY_BYLINES: 'Name des Verfassers im Beitrag anzeigen',
        DISPLAY_AUTHOR_PHOTO: 'Foto des Verfassers im Beitrag anzeigen',
        DISPLAY_AUTHOR_POSITION: 'Position des Verfassers im Beitrag anzeigen',
        ALLOW_COMMENTS: 'Benutzern erlauben, Kommentare zu schreiben',
        COMMENTS_ON: 'Kommentare zu Beiträgen als Standard erlauben.',
        REQUIRE_ACCOUNT: 'Kommentare nur durch registrierte Benutzer erlauben.',
        REQUIRE_VERIFICATION: 'Neue Benutzer müssen sich verifizieren lassen.',
        SMTP: 'SMTP',
        TEST: 'Test',
        FROM_NAME: 'Von Name',
        FROM_ADDRESS: 'Von Adresse',
        VERIFICATION_SUBJECT: 'Betreff der Besätigung',
        VERIFICATION_CONTENT: 'Inhalt der Bestätigung',
        SERVICE: 'Dienst',
        CUSTOM: 'Benutzer-definiert',
        HOST: 'Host',
        SECURE_CONNECTION: 'Sichere Verbindung (SSL)',
        EMAIL_SETTINGS: 'E-Mail-Einstellungen',
        EMAIL_DIRECTIVES_DESCRIPTION: 'Anweisungen: ^verification_url^, ^first_name^, ^last_name^',
        SEND_TEST_EMAIL: 'Test-E-Mail abschicken',
        SEND: 'Abschicken',
        USE_CDN: 'CDNs benutzen(Standardeinstellung)',
        USE_BOWER: 'Bower benutzen',
        TEST_EMAIL_SUCCESS: 'Test-E-Mail wurde erfolgreich versandt.'
    }
};

//Allows for both server and client use
if(global !== 'undefined') {
 global.loc = loc;
 global.localizationLanguage = 'en-us';
}

if(module !== 'undefined') {
 module.exports = loc;
}
