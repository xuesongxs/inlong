/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import type { MetaExportWithBackendList } from '@/plugins/types';
import type { NodeMetaType } from '../types';

export const allDefaultNodes: MetaExportWithBackendList<NodeMetaType> = [
  {
    label: 'ALL',
    value: '',
    LoadEntity: () => import('../common/NodeInfo').then(r => ({ default: r.NodeInfo })),
  },
  {
    label: 'ClickHouse',
    value: 'CLICKHOUSE',
    LoadEntity: () => import('./ClickHouse'),
  },
  {
    label: 'Elasticsearch',
    value: 'ELASTICSEARCH',
    LoadEntity: () => import('./Elasticsearch'),
  },
  {
    label: 'Hive',
    value: 'HIVE',
    LoadEntity: () => import('./Hive'),
  },
  {
    label: 'Hudi',
    value: 'HUDI',
    LoadEntity: () => import('./Hudi'),
  },
  {
    label: 'Iceberg',
    value: 'ICEBERG',
    LoadEntity: () => import('./Iceberg'),
  },
  {
    label: 'MySQL',
    value: 'MYSQL',
    LoadEntity: () => import('./MySQL'),
  },
  {
    label: 'PostgreSQL',
    value: 'POSTGRESQL',
    LoadEntity: () => import('./PostgreSQL'),
  },
  {
    label: 'Redis',
    value: 'REDIS',
    LoadEntity: () => import('./Redis'),
  },
  {
    label: 'StarRocks',
    value: 'STARROCKS',
    LoadEntity: () => import('./StarRocks'),
  },
  {
    label: 'Kudu',
    value: 'KUDU',
    LoadEntity: () => import('./Kudu'),
  },
];
