import { Stack } from '@mui/material';

import { useNodeQuery } from 'api';
import { ROOT_NODE_ID } from 'settings';

import { ListViewItem } from './ListViewItem';

interface ListViewProps {
  parentNodeId?: string;
}

export function ListView({
  parentNodeId = ROOT_NODE_ID,
}: ListViewProps): JSX.Element {
  const { data } = useNodeQuery({
    variables: {
      where: {
        id: parentNodeId,
      },
    },
  });

  return (
    <section aria-label="Graph: List View">
      <Stack spacing={2}>
        {data?.node?.children.map((node) => (
          <ListViewItem
            key={node.id}
            id={node.id}
            name={node.name}
            content={node.content}
            children={node.children}
          />
        ))}
      </Stack>
    </section>
  );
}
