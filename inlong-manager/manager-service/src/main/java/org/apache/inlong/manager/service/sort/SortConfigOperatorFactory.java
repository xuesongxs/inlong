/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.inlong.manager.service.sort;

import org.apache.inlong.manager.common.exceptions.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Factory for {@link SortConfigOperator}.
 */
@Service
public class SortConfigOperatorFactory {

    @Autowired
    private List<SortConfigOperator> operatorList;

    /**
     * Get a Sort config operator instance.
     *
     * @param isNormal is the inlong group is normal mode, 0: normal mode, 1: lightweight mode
     * @param enableZk is the inlong group enable the ZooKeeper, 1: enable, 0: disable
     */
    public SortConfigOperator getInstance(Integer isNormal, Integer enableZk) {
        return operatorList.stream()
                .filter(inst -> inst.accept(isNormal, enableZk))
                .findFirst()
                .orElseThrow(() -> new BusinessException("not found any instance of SortConfigOperator when isNormal="
                        + isNormal + ", enableZk=" + enableZk));
    }

}
