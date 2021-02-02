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
  herokuAppName: NG_ENV.HEROKU_APP_NAME || 'Pump Monitor - Localhost',
  oktaBaseUrl: NG_ENV.OKTA_BASE_URL || 'https://dev-1941070.okta.com',
  oktaClientId: NG_ENV.OKTA_CLIENT_ID || '0oa4x30y96X48XHNU5d6',
  oktaRedirectUri: NG_ENV.OKTA_REDIRECT_URI || 'https://pump-monitor-staging.herokuapps.com/callback',
};
