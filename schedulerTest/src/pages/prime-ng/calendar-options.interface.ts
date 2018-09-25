export interface CalendarOptionsInterface {
    height?: string;
    fixedWeekCount?: boolean;
    defaultDate?: string;
    editable?: boolean;
    eventLimit?: boolean;
    events?: EventsInterface[];
}

export interface EventsInterface {
    id?: number;
    title?: string;
    start?: string;
    end?: string;
    url?: string;
}