import reactRenameComponent from './migrations/react-rename-component/react-rename-component';
import reactRenameComponentProp from './migrations/react-rename-component-prop/react-rename-component-prop';
import scssRemoveUnusedAtUse from './migrations/scss-remove-unused-at-use/scss-remove-unused-at-use';
import stylesInsertStylelintDisable from './migrations/styles-insert-stylelint-disable/styles-insert-stylelint-disable';
import stylesReplaceCustomProperty from './migrations/styles-replace-custom-property/styles-replace-custom-property';
import v10ReactReplaceTextComponents from './migrations/v10-react-replace-text-components/v10-react-replace-text-components';
import v11ReactUpdatePageBreadcrumbs from './migrations/v11-react-update-page-breadcrumbs/v11-react-update-page-breadcrumbs';
import v11StylesReplaceCustomPropertyBorder from './migrations/v11-styles-replace-custom-property-border/v11-styles-replace-custom-property-border';
import v11StylesReplaceCustomPropertyColor from './migrations/v11-styles-replace-custom-property-color/v11-styles-replace-custom-property-color';
import v11StylesReplaceCustomPropertyDepth from './migrations/v11-styles-replace-custom-property-depth/v11-styles-replace-custom-property-depth';
import v11StylesReplaceCustomPropertyLegacy from './migrations/v11-styles-replace-custom-property-legacy/v11-styles-replace-custom-property-legacy';
import v11StylesReplaceCustomPropertyMotion from './migrations/v11-styles-replace-custom-property-motion/v11-styles-replace-custom-property-motion';
import v11StylesReplaceCustomPropertyZindex from './migrations/v11-styles-replace-custom-property-zindex/v11-styles-replace-custom-property-zindex';
import v9ScssReplaceBorder from './migrations/v9-scss-replace-border/v9-scss-replace-border';
import v9ScssReplaceBorderRadius from './migrations/v9-scss-replace-border-radius/v9-scss-replace-border-radius';
import v9ScssReplaceBorderWidth from './migrations/v9-scss-replace-border-width/v9-scss-replace-border-width';
import v9ScssReplaceBreakpoints from './migrations/v9-scss-replace-breakpoints/v9-scss-replace-breakpoints';
import v9ScssReplaceColor from './migrations/v9-scss-replace-color/v9-scss-replace-color';
import v9ScssReplaceDuration from './migrations/v9-scss-replace-duration/v9-scss-replace-duration';
import v9ScssReplaceEasing from './migrations/v9-scss-replace-easing/v9-scss-replace-easing';
import v9ScssReplaceFontFamily from './migrations/v9-scss-replace-font-family/v9-scss-replace-font-family';
import v9ScssReplaceFontSize from './migrations/v9-scss-replace-font-size/v9-scss-replace-font-size';
import v9ScssReplaceLineHeight from './migrations/v9-scss-replace-line-height/v9-scss-replace-line-height';
import v9ScssReplaceSpacing from './migrations/v9-scss-replace-spacing/v9-scss-replace-spacing';
import v9ScssReplaceTextEmphasis from './migrations/v9-scss-replace-text-emphasis/v9-scss-replace-text-emphasis';
import v9ScssReplaceZIndex from './migrations/v9-scss-replace-z-index/v9-scss-replace-z-index';
import v9StylesReplaceCustomPropertyBorder from './migrations/v9-styles-replace-custom-property-border/v9-styles-replace-custom-property-border';
import v9StylesReplaceCustomPropertyDepth from './migrations/v9-styles-replace-custom-property-depth/v9-styles-replace-custom-property-depth';
import v9StylesReplaceCustomPropertyFont from './migrations/v9-styles-replace-custom-property-font/v9-styles-replace-custom-property-font';
import v9StylesReplaceCustomPropertyLegacy from './migrations/v9-styles-replace-custom-property-legacy/v9-styles-replace-custom-property-legacy';
import v9StylesReplaceCustomPropertyMotion from './migrations/v9-styles-replace-custom-property-motion/v9-styles-replace-custom-property-motion';
import v9StylesTokenizeFont from './migrations/v9-styles-tokenize-font/v9-styles-tokenize-font';
import v9StylesTokenizeMotion from './migrations/v9-styles-tokenize-motion/v9-styles-tokenize-motion';
import v9StylesTokenizeShape from './migrations/v9-styles-tokenize-shape/v9-styles-tokenize-shape';
import v9StylesTokenizeSpace from './migrations/v9-styles-tokenize-space/v9-styles-tokenize-space';

export {run} from './cli';

export {cliConfig} from './constants';
export type {CLIConfig} from './constants';

export {migrate} from './migrate';
export type {MigrateOptions} from './migrate';

const config = {
  presets: {
    'react-rename-component': reactRenameComponent,
    'react-rename-component-prop': reactRenameComponentProp,
    'scss-remove-unused-at-use': scssRemoveUnusedAtUse,
    'styles-insert-stylelint-disable': stylesInsertStylelintDisable,
    'styles-replace-custom-property': stylesReplaceCustomProperty,
    'v10-react-replace-text-components': v10ReactReplaceTextComponents,
    'v11-react-update-page-breadcrumbs': v11ReactUpdatePageBreadcrumbs,
    'v11-styles-replace-custom-property-border':
      v11StylesReplaceCustomPropertyBorder,
    'v11-styles-replace-custom-property-color':
      v11StylesReplaceCustomPropertyColor,
    'v11-styles-replace-custom-property-depth':
      v11StylesReplaceCustomPropertyDepth,
    'v11-styles-replace-custom-property-legacy':
      v11StylesReplaceCustomPropertyLegacy,
    'v11-styles-replace-custom-property-motion':
      v11StylesReplaceCustomPropertyMotion,
    'v11-styles-replace-custom-property-zindex':
      v11StylesReplaceCustomPropertyZindex,
    'v9-scss-replace-border': v9ScssReplaceBorder,
    'v9-scss-replace-border-radius': v9ScssReplaceBorderRadius,
    'v9-scss-replace-border-width': v9ScssReplaceBorderWidth,
    'v9-scss-replace-breakpoints': v9ScssReplaceBreakpoints,
    'v9-scss-replace-color': v9ScssReplaceColor,
    'v9-scss-replace-duration': v9ScssReplaceDuration,
    'v9-scss-replace-easing': v9ScssReplaceEasing,
    'v9-scss-replace-font-family': v9ScssReplaceFontFamily,
    'v9-scss-replace-font-size': v9ScssReplaceFontSize,
    'v9-scss-replace-line-height': v9ScssReplaceLineHeight,
    'v9-scss-replace-spacing': v9ScssReplaceSpacing,
    'v9-scss-replace-text-emphasis': v9ScssReplaceTextEmphasis,
    'v9-scss-replace-z-index': v9ScssReplaceZIndex,
    'v9-styles-replace-custom-property-border':
      v9StylesReplaceCustomPropertyBorder,
    'v9-styles-replace-custom-property-depth':
      v9StylesReplaceCustomPropertyDepth,
    'v9-styles-replace-custom-property-font': v9StylesReplaceCustomPropertyFont,
    'v9-styles-replace-custom-property-legacy':
      v9StylesReplaceCustomPropertyLegacy,
    'v9-styles-replace-custom-property-motion':
      v9StylesReplaceCustomPropertyMotion,
    'v9-styles-tokenize-font': v9StylesTokenizeFont,
    'v9-styles-tokenize-motion': v9StylesTokenizeMotion,
    'v9-styles-tokenize-shape': v9StylesTokenizeShape,
    'v9-styles-tokenize-space': v9StylesTokenizeSpace,
  },
};

export default config;
