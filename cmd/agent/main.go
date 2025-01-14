package main

import (
	"fmt"
	"os"

	"github.com/kubeshop/testkube-executor-cypress/pkg/runner"
	"github.com/kubeshop/testkube/pkg/executor/agent"
	"github.com/kubeshop/testkube/pkg/executor/output"
)

func main() {
	r, err := runner.NewCypressRunner()
	if err != nil {
		output.PrintError(fmt.Errorf("could not initialize runner: %w", err))
		os.Exit(1)
	}
	agent.Run(r, os.Args)
}
