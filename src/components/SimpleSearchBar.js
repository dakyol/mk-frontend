import React from 'react';

import {Form, FormControl, Button, InputGroup} from 'react-bootstrap'

function SimpleSearchBar() {
    return(
        <React.Fragment>
            <Form className="row d-flex justify-content-center" method="GET" action="keci/search">
                <InputGroup className="input-group-lg col-md-6">
                    <FormControl type="text" id="query" name="query" className="w-50" placeholder="Search terms..." aria-label="search-terms" value="search-term gelecek buraya" /*onChange={(e: React.FormEvent<FormControl>) => setValue(e.currentTarget.value)}*//>
                    <Form.Control as="select">
                        <option value="all" selected="">All fields</option>
                        <option value="title">Title</option>
                        <option value="abstract">Abstract</option>
                        <option value="author">Author(s)</option>
                        <option value="help">Help pages</option>
                        <option value="full_text">Full text</option>
                    </Form.Control>
                    <Button type="submit" variant="primary">Search</Button>
                    <input type="hidden" name="order" value="order-term-olacak" />
                    <input type="hidden" name="size" value="size-term-olacak" />
                </InputGroup>
            </Form>
        </React.Fragment>
    );
}

export default SimpleSearchBar;