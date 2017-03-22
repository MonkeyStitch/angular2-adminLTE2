export interface User {

    id:string;
    user_name:string;
    display_name?:string;
    email:string;

    locale?:string; // Language :: The language and locale to use for this user.

    title:string;

    primary_group_id?:string; // The id of this user''s primary group.

    secret_token?:string; // The current one-time use token for various user activities confirmed via email.

    flag_verified?:string; // Set to ''1'' if the user has verified their account via email, ''0'' otherwise.

    flag_enabled?:string; // Set to ''1'' if the user''s account is currently enabled, ''0'' otherwise.  Disabled accounts cannot be logged in to, but they retain all of their data and settings.

    flag_password_reset?:string; // Set to ''1'' if the user has an outstanding password reset request, ''0'' otherwise.

    created_at?:string; // timestamp

    updated_at?:string; // timestamp

    password:string; // varchar 255


}