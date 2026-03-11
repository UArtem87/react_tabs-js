export const Tabs = ({ tab, activeTabId, onTabSelected }) => {
  return (
    <li
      className={`${activeTabId === tab.id ? 'is-active' : ''}`}
      data-cy="Tab"
    >
      <a href="#tab-1" data-cy="TabLink" onClick={() => onTabSelected(tab.id)}>
        {tab.title}
      </a>
    </li>
  );
};
