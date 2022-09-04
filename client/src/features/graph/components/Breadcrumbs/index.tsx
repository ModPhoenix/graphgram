import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    // height: theme.spacing(3),
    color: theme.palette.text.primary,
    // fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps): JSX.Element {
  return (
    <div role="presentation">
      <MuiBreadcrumbs aria-label="breadcrumb" separator="">
        {breadcrumbs.map((item) => (
          <StyledBreadcrumb
            component={Link}
            key={item.label}
            to={item.href}
            label={item.label}
          />
        ))}
      </MuiBreadcrumbs>
    </div>
  );
}
