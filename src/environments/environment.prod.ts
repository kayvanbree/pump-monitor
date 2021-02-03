import { NG_ENV } from 'angular-server-side-configuration/ng-env';

/**
 * How to use angular-server-side-configuration:
 *
 * Use process.env.NAME_OF_YOUR_ENVIRONMENT_VARIABLE
 *
 * export const environment = {
 *   stringValue: process.env.STRING_VALUE,
 *   stringValueWithDefault: process.env.STRING_VALUE || 'defaultValue',
 *   numberValue: Number(process.env.NUMBER_VALUE),
 *   numberValueWithDefault: Number(process.env.NUMBER_VALUE || 10),
 *   booleanValue: Boolean(process.env.BOOLEAN_VALUE),
 *   booleanValueInverted: process.env.BOOLEAN_VALUE_INVERTED !== 'false',
 * };
 */

export const environment = {
  production: true,
  herokuAppName: NG_ENV.HEROKU_APP_NAME || 'Pump Monitor - Test',
  oktaOauth2Issuer: NG_ENV.OKTA_OAUTH2_ISSUER || 'https://dev-1650732.okta.com/oauth2/default',
  oktaOauth2ClientIdSPA: NG_ENV.OKTA_OAUTH2_CLIENT_ID_SPA || '0oa4zg3xxFFfwZ5km5d6',
  apiBaseUrl: NG_ENV.API_BASE_URL || 'https://pump-monitor-staging-api.herokuapp.com',
};
